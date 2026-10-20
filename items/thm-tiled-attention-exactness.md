---
id: thm-tiled-attention-exactness
kind: theorem
title: "Tiled attention and its recomputed reverse pass are exact"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 3
deps:
  - alg-exact-tiled-softmax-attention
  - def-attention-block-summary
  - def-scaled-dot-product-attention
  - def-finite-straight-line-computational-program
  - thm-chain-rule-for-total-derivatives
  - thm-reverse-mode-computes-gradient
  - alg-backpropagation-through-shared-parameter-recurrence
  - thm-shared-parameter-backpropagation-gradient-formula
justified_by: []
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Tri Dao et al., FlashAttention: Fast and Memory-Efficient Exact Attention with IO-Awareness, §§3.1, Appendix B.2–B.4, and Appendix C"
      url: "https://arxiv.org/pdf/2205.14135"
    - title: "Maxim Milakov and Natalia Gimelshein, Online normalizer calculation for softmax, §3"
      url: "https://arxiv.org/pdf/1805.02867"
    - title: "MIT OpenCourseWare 18.S096, Matrix Calculus for Machine Learning and Beyond, Chapter 8 §§8.3–8.4"
      url: "https://ocw.mit.edu/courses/18-s096-matrix-calculus-for-machine-learning-and-beyond-january-iap-2023/mit18_s096iap23_lec_full.pdf"
---

## Statement

Let $n,d,v$ be positive integers, $Q,K\in\mathbb R^{n\times d}$ and $V\in\mathbb R^{n\times v}$ be finite real matrices, $c\in\mathbb R$, $b$ a positive integer, and $A_i\subseteq\{1,\ldots,n\}$ a fixed nonempty set of allowed keys for every query row $i$. Write $Q_i$ for row $i$ of $Q$, and $K_j,V_j$ for row $j$ of $K,V$. Let $Y,m_i,\ell_i$ be the forward outputs and row statistics of the exact tiled softmax attention algorithm, and fix an upstream matrix $G\in\mathbb R^{n\times v}$. Then each row of $Y$ equals the dense masked attention row

$$
Y_i=\frac{\sum_{j\in A_i}e^{cQ_iK_j^{\mathsf T}}V_j}{\sum_{j\in A_i}e^{cQ_iK_j^{\mathsf T}}},
$$

and the algorithm's recomputed reverse procedure returns the Euclidean gradients of the scalar function $\Phi(Q,K,V)=\sum_{i=1}^{n}\sum_{a=1}^{v}G_{ia}Y_{ia}$ with respect to $Q,K,V$, while holding $c$, the sets $A_i$, and $G$ fixed. Its reverse rule treats the stored maxima as fixed normalization shifts, so the conclusion also holds when scores tie at a row maximum. Every row is defined because $A_i$ is nonempty; no convention for an all-masked row is asserted.

## Statement references

[Dao et al., §3.1 and Appendix C: exactness of the online tiled attention recurrence](https://arxiv.org/pdf/2205.14135)

[Dao et al., Appendix B.2–B.4: reverse-mode derivatives and block recomputation](https://arxiv.org/pdf/2205.14135)

[Milakov and Gimelshein, §3: online normalizer recurrence and its induction proof](https://arxiv.org/pdf/1805.02867)

[MIT OCW, Chapter 8 §§8.3–8.4: finite-graph reverse-mode chain rule](https://ocw.mit.edu/courses/18-s096-matrix-calculus-for-machine-learning-and-beyond-january-iap-2023/mit18_s096iap23_lec_full.pdf)

## Facts & Assumptions

**Given:** The finite real inputs, the fixed nonempty allowed-key sets, the positive block size, the forward and reverse procedures, and the upstream matrix $G$.

[F1] [[def-scaled-dot-product-attention]]: masked attention uses row softmax of the scaled query-key scores and is defined only when each row has an allowed key.

[F2] [[def-attention-block-summary]]: for nonempty $S$, the summary coordinates are $\max_{j\in S}s_{ij}$, $\sum_{j\in S}e^{s_{ij}-m_i(S)}$, and $\sum_{j\in S}e^{s_{ij}-m_i(S)}V_j$; the empty set is the separate symbol $\bot$.

[F3] [[alg-exact-tiled-softmax-attention]]: the forward pass skips empty allowed blocks, copies the first nonempty block summary, merges later summaries, and the reverse pass recomputes $p_{ij}$ and accumulates the stated $dQ,dK,dV$ entries.

[F4] [[def-finite-straight-line-computational-program]]: a finite topologically ordered real-arithmetic graph has differentiable primitive maps on open domains and repeated input uses are separate parent slots.

[F5] [[thm-reverse-mode-computes-gradient]]: for a finite $C^1$ program with one scalar output on a fixed strict branch, reverse mode returns the exact derivative of that output.

[F6] [[thm-chain-rule-for-total-derivatives]]: for totally differentiable finite-dimensional maps, the derivative of a composition is the ordered composition of the derivatives.

[F7] [[alg-backpropagation-through-shared-parameter-recurrence]]: the same parameter vector is supplied to every transition.

[F8] [[thm-shared-parameter-backpropagation-gradient-formula]]: the gradient formula includes a pullback term for each transition using the shared parameter.

## Proof

**Proof technique:** identify the exact summary invariant, then differentiate the equivalent dense masked attention map and group repeated input contributions.

1.1 Fix a query row $i$ and let $S$ be the union of the allowed keys in the blocks processed so far. Initially $S=\varnothing$ and the algorithm's state is $\bot$. An empty allowed block leaves both $S$ and the state unchanged. If $S=\varnothing$ and the next allowed block $I$ is nonempty, copying $\Sigma_i(I)$ gives the defining summary of $S\cup I$. If $S$ and $I$ are both nonempty, the merged maximum is $\max(m_i(S),m_i(I))=m_i(S\cup I)$, and $e^{m_i(S)-m_i(S\cup I)}\ell_i(S)=\sum_{j\in S}e^{s_{ij}-m_i(S\cup I)}$ while $e^{m_i(I)-m_i(S\cup I)}\ell_i(I)=\sum_{j\in I}e^{s_{ij}-m_i(S\cup I)}$. The same two identities with $V_j$ inside each sum give the merged $z$ coordinate. Disjoint blocks therefore preserve the summary invariant. [F2, F3, given, construct]

2.1 The key blocks partition $\{1,\ldots,n\}$, so after the last block $S=A_i\ne\varnothing$. The maximum $m_i$ is finite and at least one term in $\ell_i=\sum_{j\in A_i}e^{s_{ij}-m_i}$ equals $1$, hence $\ell_i>0$. Dividing $z_i$ by $\ell_i$ and multiplying numerator and denominator by $e^{m_i}$ gives the displayed dense masked attention row. This also proves every retained $m_i,\ell_i$ is defined. [F1, F2, F3, step 1.1, algebra]

3.1 With the allowed sets fixed, every score is a polynomial in the entries of $Q,K$; finite exponentials, sums, and division by the strictly positive dense denominator make the dense row map smooth on all of $\mathbb R^{n(2d+v)}$. Its scalarization $\Phi$ is therefore a finite $C^1$ real-arithmetic graph. The reverse-mode theorem and chain rule apply to this dense graph; the maximum used only to scale the tiled forward computation is not a primitive of this graph. [F4, F5, F6, step 2.1, given]

4.1 For $j,k\in A_i$, write $p_{ij}=e^{s_{ij}}/\sum_{\ell\in A_i}e^{s_{i\ell}}$, as justified by step 2.1. Direct quotient differentiation gives $\frac{\partial p_{ik}}{\partial s_{ij}}=p_{ik}\bigl(\mathbf 1_{\{k=j\}}-p_{ij}\bigr)$. Thus for $\Phi_i=\sum_aG_{ia}Y_{ia}$ the score derivative is $\frac{\partial\Phi_i}{\partial s_{ij}}=\sum_{k\in A_i}(\sum_aG_{ia}V_{ka})\frac{\partial p_{ik}}{\partial s_{ij}}=p_{ij}(\sum_aG_{ia}V_{ja}-\sum_aG_{ia}Y_{ia})=\gamma_{ij}$. The direct value derivative is $\nabla_{V_j}\Phi_i=p_{ij}G_i$. [F5, F6, step 2.1, step 3.1, algebra]

5.1 Since $s_{ij}=c\sum_rQ_{ir}K_{jr}$, its coordinate derivatives are $\partial s_{ij}/\partial Q_{ir}=cK_{jr}$ and $\partial s_{ij}/\partial K_{jr}=cQ_{ir}$. The chain rule therefore gives the row-$i$ contributions $c\sum_{j\in A_i}\gamma_{ij}K_j$ to $Q_i$, $c\gamma_{ij}Q_i$ to $K_j$, and $p_{ij}G_i$ to $V_j$. Entries of other query rows receive no contribution from this row. [F6, step 4.1, algebra]

6.1 Set $\Theta=\mathbb R^{2nd+nv}$, $H=\mathbb R$, $h_0(\theta)=0$, $F_i(\theta,h)=h+\sum_aG_{ia}Y_{ia}(\theta)$ for $i=1,\ldots,n$, and terminal loss $\lambda(\theta,h)=h$. Step 3.1 makes every $F_i$ continuously differentiable on the open domain $\Theta\times H$. By induction on $i$, the recurrence state after $i$ transitions is $h_i=\sum_{r=1}^{i}\sum_aG_{ra}Y_{ra}(\theta)$: the formula holds at $i=0$ because $h_0=0$, and adding the $i$th transition term proves it at $i$ from its value at $i-1$. Thus its scalar output is $h_n=\Phi(\theta)$. The same parameter $\theta=(Q,K,V)$ is supplied at every transition, and the shared-parameter gradient formula sums each transition's parameter pullback. It therefore adds each row's pullback at the common $K,V$ inputs, while the row-specific $Q_i$ pullbacks occupy their corresponding rows. There is no direct loss or initial-state parameter term because $\lambda$ is $h$ and $h_0$ is constant. Thus the algorithm's reverse updates give $\nabla_Q\Phi,\nabla_K\Phi,\nabla_V\Phi$. [F7, F8, step 3.1, step 5.1, algebra]

7.1 At the forward values, the summary invariant in steps 1.1–2.1 gives $\ell_i=\sum_{j\in A_i}e^{s_{ij}-m_i}$. Therefore, for each $j\in A_i$, $$ p_{ij}=\frac{e^{s_{ij}-m_i}}{\ell_i}=\frac{e^{s_{ij}}}{\sum_{\ell\in A_i}e^{s_{i\ell}}}. $$ This is the dense softmax probability evaluated at the current scores. Steps 4.1–6.1 differentiate the smooth dense attention map and show that substituting these probabilities into the reverse updates gives its exact gradient at these inputs. The stored $m_i$ and $\ell_i$ are used as normalization shifts in those updates; no derivative of either statistic is needed. The argument applies whether or not the maximum score is tied. [F2, F3, step 2.1, step 3.1, step 4.1, step 5.1, step 6.1, algebra] ∎

