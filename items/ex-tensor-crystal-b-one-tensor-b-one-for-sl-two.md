---
id: ex-tensor-crystal-b-one-tensor-b-one-for-sl-two
kind: example
title: "The tensor crystal $B(1)\\otimes B(1)$ for $\\mathfrak{sl}_2$"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-tensor-product-of-crystals, thm-crystal-basis-tensor-product-rule, lem-crystal-tensor-product-weight-epsilon-and-phi-formulas, def-crystal-graph-epsilon-phi-and-weight, def-kashiwara-lattices-lambda-and-infinity, def-kashiwara-crystal-operators, thm-quantized-sl-two-string-formulas, def-quantum-integers-factorials-and-divided-powers-at-q-i]
justified_by: []
aliases: []
landmark: false
dependency_level: 9
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Kyeonghoon Jeong, Seok-Jin Kang and Masaki Kashiwara, Crystal Bases for Quantum Generalized Kac-Moody Algebras, arXiv:math/0305390"
      url: "https://arxiv.org/pdf/math/0305390"
      locator: "§5, printed pp. 19-20, Example 5.1(a): for $m=\\lambda(h_i)=1$ the crystal basis $\\{v_\\lambda,f_iv_\\lambda\\}$ of the two-dimensional $U_i$-module with $\\tilde e_i$ and $\\tilde f_i$ acting by the string shift and $\\varphi_i=m-l$."
    - title: "Richard Borcherds, Mark Haiman, Theo Johnson-Freyd, Nicolai Reshetikhin and Vera Serganova, Berkeley Lectures on Lie Groups and Quantum Groups (book-length lecture notes, last updated 18 January 2024)"
      url: "https://categorified.net/LieQuantumGroups.pdf"
      locator: "Ch. 13, §13.3, printed p. 333 and the proof of Theorem 13.3.0.18: $L(1)\\otimes L(m)=L(m+1)\\oplus L(m-1)$, in particular $V(1)\\otimes V(1)=V(2)\\oplus V(0)$."
    - title: "Mark Shimozono, Crystals for Dummies (lecture notes, 28 August 2005)"
      url: "https://www.aimath.org/WWN/kostka/crysdumb.pdf"
      locator: "§2.2.2 and §2.4.1: the single box crystal $1\\xrightarrow{1}2$ and the crystals $B(\\lambda)$ for dominant weights."
---

## Example

Let $\mathfrak g=\mathfrak{sl}_2$, $I=\{1\}$, with fundamental weight $\lambda_1$ and simple root $\alpha_1=2\lambda_1$. Let $V(1)$ be the two-dimensional simple integrable module with highest vector $v_0$ and crystal $B(1)=\{v_0,v_1\}$, where $v_1=F_1v_0$; the $i$-string is $v_0\xrightarrow{1}v_1$ with $wt(v_0)=\lambda_1$, $wt(v_1)=-\lambda_1$ and $\varepsilon_1(v_0)=0,\ \varphi_1(v_0)=1,\ \varepsilon_1(v_1)=1,\ \varphi_1(v_1)=0$ (JKK Example 5.1(a) with $m=1$).

Compute the tensor crystal $B(1)\otimes B(1)$ of [[def-tensor-product-of-crystals]] with the two-case rule of [[thm-crystal-basis-tensor-product-rule]]. Writing the four vertices as $v_j\otimes v_k$ with $j,k\in\{0,1\}$, the rule gives

$$\tilde f_1(v_j\otimes v_k)=\begin{cases}v_{j+1}\otimes v_k,&1-j>k,\\ v_j\otimes v_{k+1},&1-j\le k,\end{cases}\qquad \tilde e_1(v_j\otimes v_k)=\begin{cases}v_{j-1}\otimes v_k,&1-j\ge k,\\ v_j\otimes v_{k-1},&1-j<k.\end{cases}$$

Consequently: $v_0\otimes v_0$ is the unique highest vertex of weight $2\lambda_1$ and generates the chain $v_0\otimes v_0\to v_1\otimes v_0\to v_1\otimes v_1$; the remaining vertex $v_0\otimes v_1$ has weight $0$, is killed by $\tilde e_1$ and by $\tilde f_1$, and forms a one-element component; and $\varepsilon_1,\varphi_1$ of the four vertices are $(0,2),(1,1),(2,0),(0,0)$ at $(0,0),(1,0),(1,1),(0,1)$ respectively. Hence $B(1)\otimes B(1)=B(2)\sqcup B(0)$, matching the classical decomposition $V(1)\otimes V(1)=V(2)\oplus V(0)$ of dimensions $4=3+1$; here $B(2)$ is the three-element $1$-chain of weights $2\lambda_1,0,-2\lambda_1$ and $B(0)$ the one-element crystal of weight $0$.

## Facts & Assumptions

**Given:** $\mathfrak g=\mathfrak{sl}_2$ with $I=\{1\}$, $\alpha_1=2\lambda_1$, the two-element crystal $B(1)=\{v_0,v_1\}$ with the single arrow $v_0\xrightarrow{1}v_1$, and the tensor product crystal $B(1)\otimes B(1)$ of [[def-tensor-product-of-crystals]] with the operators of [[thm-crystal-basis-tensor-product-rule]].

[F1] The rank-one crystal of dimension two ([[thm-quantized-sl-two-string-formulas]], with [[def-quantum-integers-factorials-and-divided-powers-at-q-i]]): the module $L_1(1)$ has basis $v_0,v_1=F_1v_0$, with $K_1v_t=q_1^{1-2t}v_t$, so $wt(v_0)=\lambda_1$, $wt(v_1)=-\lambda_1$; the crystal basis is $\{v_0,v_1\}$ and the operators shift the string, giving the arrow $v_0\xrightarrow{1}v_1$ with $\varepsilon_1(v_0)=0$, $\varphi_1(v_0)=1$, $\varepsilon_1(v_1)=1$, $\varphi_1(v_1)=0$.

[F2] The two-case tensor rule ([[def-tensor-product-of-crystals]], [[thm-crystal-basis-tensor-product-rule]]): $\tilde f_1$ acts on the first factor if and only if $\varphi_1(b_1)>\varepsilon_1(b_2)$ and on the second otherwise, $\tilde e_1$ acts on the first factor if and only if $\varphi_1(b_1)\ge\varepsilon_1(b_2)$ and on the second otherwise, with value $0$ when the chosen factor reaches the string end.

[F3] The max formulas ([[lem-crystal-tensor-product-weight-epsilon-and-phi-formulas]]): $\varepsilon_1(b_1\otimes b_2)=\max(\varepsilon_1(b_1),\varepsilon_1(b_2)-\langle h_1,wt(b_1)\rangle)$ and $\varphi_1(b_1\otimes b_2)=\max(\varphi_1(b_1)+\langle h_1,wt(b_2)\rangle,\varphi_1(b_2))$.

[F4] Crystal graph conventions ([[def-crystal-graph-epsilon-phi-and-weight]]): each finite $i$-string has $\varepsilon_i+\varphi_i+1$ vertices, $\varphi_i(b)-\varepsilon_i(b)=\langle h_i,wt(b)\rangle$, and $K_1v_0=q_1v_0$ gives $\langle h_1,wt(v_0)\rangle=1$, $\langle h_1,wt(v_1)\rangle=-1$.

[F5] The canonical rank-one crystals ([[thm-quantized-sl-two-string-formulas]], [[def-kashiwara-lattices-lambda-and-infinity]], [[def-kashiwara-crystal-operators]]): $B(2)$ is the three-element one-colour chain of weights $2\lambda_1,0,-2\lambda_1$, and $B(0)$ the one-element crystal of weight $0$ killed by both operators.

## Verification

**Proof technique:** direct.

1.1 Read off the four residues and the values $\varepsilon_1(v_0)=0,\varphi_1(v_0)=1,\varepsilon_1(v_1)=1,\varphi_1(v_1)=0$ from the two-element chain $v_0\xrightarrow{1}v_1$, which is the $m=1$ case of the rank-one crystal basis of [F1]. [given, F1]

2.1 Apply the rule [F2] vertex by vertex: $\tilde f_1(v_0\otimes v_0)=v_1\otimes v_0$ since $1>0$; $\tilde f_1(v_1\otimes v_0)=v_1\otimes v_1$ since $0\le0$; $\tilde f_1(v_1\otimes v_1)=0$ since $0\le1$ selects the second factor and $\tilde f_1v_1=0$; $\tilde f_1(v_0\otimes v_1)=0$ since $1\le1$ selects the second factor and $\tilde f_1v_1=0$. This gives the two components stated, with the highest vertices $v_0\otimes v_0$ and $v_0\otimes v_1$. [step 1.1, F2]

3.1 Compute $\varepsilon_1,\varphi_1$ by iterating the same rule and compare with the max formulas [F3], using $\langle h_1,wt(v_0)\rangle=1$ and $\langle h_1,wt(v_1)\rangle=-1$ from [F4]: at $v_0\otimes v_0$, $\varepsilon_1=\max(0,0-1)=0$ and $\varphi_1=\max(\varphi_1(v_0)+\langle h_1,wt(v_0)\rangle,\varphi_1(v_0))=\max(1+1,1)=2$; at $v_1\otimes v_0$, $\varepsilon_1=\max(1,0-(-1))=1$ and $\varphi_1=\max(0+1,1)=1$; at $v_1\otimes v_1$, $\varepsilon_1=\max(1,1-(-1))=2$ and $\varphi_1=\max(0-1,0)=0$; at $v_0\otimes v_1$, $\varepsilon_1=\max(0,1-1)=0$ and $\varphi_1=\max(1-1,0)=0$. [step 2.1, step 1.1, F3, F4]

4.1 Identify the components. The three-element chain has top weight $2\lambda_1$, middle weight $0$, bottom weight $-2\lambda_1$ and one colour; a connected crystal with a unique highest vertex of weight $2\lambda_1$ and $\varepsilon_1+\varphi_1+1=3$ vertices in its only string is the rank-one crystal $B(2)$ of [F5] (the $m=2$ case of the same rank-one description). The remaining vertex is killed by both operators and has weight $0$, so it is $B(0)$. This identifies the two components without invoking the general uniqueness theorem, so the example is choice-free. [step 3.1, step 2.1, F4, F5]

5.1 Cross-check the module decomposition directly. Put $z=q_1$, $t=v_0\otimes v_0$ and $s=v_0\otimes v_1-zv_1\otimes v_0$. The coproduct convention underlying [F2] and the rank-one action of [F1] give $E_1t=0$, $F_1t=v_1\otimes v_0+zv_0\otimes v_1$, $F_1^{(2)}t=v_1\otimes v_1$, and $E_1s=F_1s=0$, $K_1s=s$. The two weight-zero vectors $F_1t,s$ are independent because their coefficient determinant is $1+z^2\ne0$. Hence the three-dimensional cyclic string of $t$ and the trivial line of $s$ sum directly to the four-dimensional tensor module; [F1] identifies them as $V(2)$ and $V(0)$. This gives $4=3+1$, and the corresponding classical two-dimensional tensor square has the same dimensions and highest weights. [step 4.1, F1, F2, algebra] ∎