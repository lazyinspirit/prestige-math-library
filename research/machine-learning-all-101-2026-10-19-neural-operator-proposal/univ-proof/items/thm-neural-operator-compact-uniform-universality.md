---
id: thm-neural-operator-compact-uniform-universality
kind: theorem
title: "Neural operators approximate continuous maps uniformly on compacta"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
deps:
  - def-neural-operator
  - def-neural-operator-activation-classes
  - lem-neural-operator-ba-class-is-empty-as-defined
  - thm-neural-operator-input-output-spaces-have-ap
  - thm-locally-integrable-functions-embed-in-distributions
  - def-countable-choice
  - thm-single-hidden-layer-universal-approximation
  - lem-inward-mollification-and-finite-rank-approximation-on-lipschitz-domains
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
sources:
  references:
    - title: "Kovachki et al., Neural Operator: Learning Maps Between Function Spaces With Applications to PDEs"
      url: "https://arxiv.org/pdf/2108.08481"
---

## Statement

Assume Countable Choice. Let $D\subset\mathbb R^d$ and $D'\subset\mathbb R^{d'}$ be bounded Lipschitz domains. Let $A$ be $L^{p_1}(D)$, $W^{m_1,p_1}(D)$, or $C(\bar D)$, with $1\le p_1<\infty$ and $m_1\ge1$ where applicable. Let $U$ be $L^{p_2}(D')$, $W^{m_2,p_2}(D')$, or $C^{m_2}(\bar D')$, with $1\le p_2<\infty$, with $m_2=0$ in the Lebesgue case, $m_2\ge1$ in the Sobolev case, and $m_2\ge0$ in the continuous case. Let $G^\dagger:A\to U$ be continuous, $K\subset A$ compact, and $\varepsilon>0$. Suppose $\sigma_1\in\mathcal A_0^L$, $\sigma_2\in\mathcal A_0$, and $\sigma_3\in\mathcal A_{m_2}$ in every finite input dimension used below. Then some finite-layer neural operator $G$ in the specified integral architecture satisfies
$$\sup_{a\in K}\|G^\dagger(a)-G(a)\|_U<\varepsilon.$$

The printed additional source implication asserts that, if $U$ is Hilbert, $M>0$, $\|G^\dagger(a)\|_U\le M$ on all $A$, and $\sigma_1\in\mathrm{BA}$, then $\|G(a)\|_U\le4M$ on all $A$. This exact implication is vacuous because its diameter-bounded class is empty. A useful corrected implication replaces only that additional activation premise by the following explicitly different property: for every compact $S\subset\mathbb R^q$, every $C\ge\sup_{z\in S}|z|_2$ with the convention that the radius of the empty set is zero, and every $\eta>0$, there is a $\sigma_1$ MLP $b:\mathbb R^q\to\mathbb R^q$ with $\sup_S|b(z)-z|_2<\eta$ and $\sup_{\mathbb R^q}|b(z)|_2\le C$. Under this replacement the same global bound $4M$ holds. This replacement does not change the printed diameter-based definition.

## Statement references

[Kovachki et al., Theorem 11, Definitions 5–7 and Appendices A, C, D, F](https://arxiv.org/pdf/2108.08481)

## Facts & Assumptions

**Given:** The spaces, compact set, target, activation hypotheses and error in the Statement.

[F1] The activation hypotheses supply fixed-depth finite MLP density in the indicated finite-dimensional $C^m$ norms; stacking scalar networks of a common depth gives vector outputs. Their affine output layers allow linear combinations and constant functions ([[def-neural-operator-activation-classes]]).

[F2] The architecture uses affine integral maps on $D$, coordinatewise $\sigma_1$ between its intermediate affine maps, and a final kernel on $D'\times D$ integrated over $D$ ([[def-neural-operator]]).

[F3] Smooth restrictions are norm-dense in $L^p(D')$ and $W^{m,p}(D')$ for finite $p$; the constructive smooth-range approximation supplied by [[lem-inward-mollification-and-finite-rank-approximation-on-lipschitz-domains]] yields this assertion. No smooth extension of an arbitrary $C^m(\bar D')$ function is required: its approximation is exactly the $C^m$ density premise in [F1].

[F4] Under Countable Choice, if $a,b\in L^1_{\mathrm{loc}}(D)$ are distinct modulo null functions then some real $\varphi\in C_c^\infty(D)$ has $\int_D\varphi(a-b)\ne0$, by injectivity of regular distributions ([[thm-locally-integrable-functions-embed-in-distributions]], [[def-countable-choice]]).

[F6] ReLU networks are compact-uniformly dense for continuous finite-dimensional targets under Countable Choice ([[thm-single-hidden-layer-universal-approximation]]).

[F5] The source's diameter-bounded class is empty ([[lem-neural-operator-ba-class-is-empty-as-defined]]).

## Proof

1.1 If $K$ is empty choose the zero operator. Otherwise put $T=G^\dagger|_K$ and choose $0<\tau<\varepsilon/5$. Every listed input space injects continuously into $L^1(D)$: for finite $p$, $\|a\|_1\le |D|^{1-1/p}\|a\|_p\le |D|^{1-1/p}\|a\|_{W^{m,p}}$ when applicable, and for $C(\bar D)$ use $\|a\|_1\le|D|\|a\|_\infty$. Thus each smooth moment $a\mapsto\int_D\varphi a$ is continuous on $A$ and such moments separate distinct members of $K$, using [F4]; distinct continuous functions also differ on an interior set of positive measure. [given, F4, choose, algebra]

1.2 The set $Q=\{(a,b)\in K^2:\|T(a)-T(b)\|_U\ge\tau\}$ is compact. For each pair in $Q$ a separating moment from step 1.1 remains nonzero on a neighborhood of that pair. A finite subcover supplies moments $\varphi_1,\ldots,\varphi_J$ such that $E(a)=(\int_D\varphi_ja)_{j=1}^J$ has $E(a)\ne E(b)$ for all $(a,b)\in Q$. If $Q$ is nonempty, the positive continuous function $|E(a)-E(b)|_2$ on $Q$ has a positive minimum $r$; if $Q$ is empty set $J=1$, $\varphi_1=0$, and $r=1$. In both cases $|E(a)-E(b)|_2<r$ implies $\|T(a)-T(b)\|_U<\tau$. This is the complete finite-moment reduction and does not presume a dual representation theorem. [step 1.1, construct, choose]

1.3 Cover the compact $E(K)$ by finitely many open balls of radius $r/4$ with centers $z_i=E(a_i)$, $a_i\in K$, $1\le i\le s$. Put $h_i(z)=\max(0,r/2-|z-z_i|_2)$, $h_0(z)=\operatorname{dist}(z,E(K))$, and $w_i(z)=h_i(z)/(h_0(z)+\sum_{k=1}^s h_k(z))$. The denominator is positive everywhere: off $E(K)$ its first term is positive, and on $E(K)$ some $h_i>r/4$. Consequently $w=(w_1,\ldots,w_s)$ is continuous on all $\mathbb R^J$, nonnegative, and $\sum_iw_i\le1$, with equality on $E(K)$. For $a\in K$, $w_i(E(a))>0$ implies $|E(a)-E(a_i)|_2<r/2$ and hence $\|T(a)-T(a_i)\|_U<\tau$. The convex combination $\sum_iw_i(E(a))T(a_i)$ therefore differs from $T(a)$ by less than $\tau$. [step 1.2, construct, algebra]

2.1 For Lebesgue and Sobolev outputs choose smooth neighborhood restrictions $\phi_i$ with $\|\phi_i-T(a_i)\|_U<\tau$, using [F3]. For continuous outputs set $\phi_i=T(a_i)$, which is already $C^{m_2}(\bar D')$. Define $Bv=\sum_i v_i\phi_i$ and $L=\max(1,\|B\|_{\ell^1\to U})$. Since the weights in step 1.3 sum to one on $E(K)$, $\sup_K\|T(a)-Bw(E(a))\|_U<2\tau$. This is the output finite-dimensional factorization. [step 1.3, F3, choose, construct, algebra]

2.2 Let $Z=\{z:\operatorname{dist}(z,E(K))\le1\}$, a compact subset of $\mathbb R^J$. Uniform continuity of $w$ on $Z$ gives $0<\delta<1$ such that $z,z'\in Z$ and $|z-z'|_2<\delta$ imply $|w(z)-w(z')|_1<\tau/L$. Set $R=\max(1,\sup_{a\in K}\|a\|_1)$. By the $\sigma_2$ premise [F1] choose common-depth scalar networks $p_j$ with $\sup_{\bar D}|p_j-\varphi_j|<\delta/(2R\sqrt J)$. Then $\widetilde E(a)=(\int_Dp_j(y)a(y)\,dy)_j$ satisfies $\sup_K|\widetilde E-E|_2<\delta/2$, so $\widetilde E(K)\subset Z$ and $\sup_K\|Bw(E(a))-Bw(\widetilde E(a))\|_U<\tau$. The input layer kernel $(x,y)\mapsto(p_j(y))_j$ ignores $x$ and has exactly constant spatial output. The estimate uses only $L^1$ bounds and covers $p_1=1$. [step 1.1, step 2.1, F1, choose, construct, algebra]

2.3 Apply the $\sigma_1\in\mathcal A_0$ premise to the continuous map $w$ on compact $\widetilde E(K)$, obtaining a finite MLP $f:\mathbb R^J\to\mathbb R^s$ such that $\sup_{z\in\widetilde E(K)}|f(z)-w(z)|_1<\tau/L$. Then $\sup_K\|Bw(\widetilde E(a))-Bf(\widetilde E(a))\|_U<\tau$. Only $C^0$ approximation of this middle map is used; no differentiability of $\sigma_1$ is needed. [step 2.2, F1, choose, algebra]

2.4 Put $V=\max(1,\sup_{a\in K}|f(\widetilde E(a))|_1)$, finite by continuity and compactness. Define $c_U=1$ for $U=C^{m_2}(\bar D')$ with the maximum derivative norm, and $c_U=(J_{m_2}|D'|)^{1/p_2}$ for $U=W^{m_2,p_2}(D')$ with the usual sum-of-$p_2$-powers norm, where $J_m$ counts multi-indices of order at most $m$; this also treats $L^{p_2}$ with $J_0=1$. For $C^{m_2}$ functions $u$, directly integrating each derivative gives $\|u\|_U\le c_U\|u\|_{C^{m_2}}$. By $\sigma_3\in\mathcal A_{m_2}$ choose common-depth networks $q_i$ such that $\|q_i-\phi_i\|_{C^{m_2}(\bar D')}<\tau/(c_UV)$. These approximants are chosen from the $C^{m_2}$ network subfamily supplied by that density premise, so their derivatives exist. With $\widetilde Bv=\sum_i v_iq_i$, the estimate $\|(\widetilde B-B)v\|_U\le c_U|v|_1\max_i\|q_i-\phi_i\|_{C^{m_2}}$ yields $\sup_K\|\widetilde Bf(\widetilde E(a))-Bf(\widetilde E(a))\|_U<\tau$. Equivalent choices of standard Banach norms merely change $c_U$. [step 2.1, step 2.3, F1, choose, construct, algebra]

3.1 Write the middle MLP as $f(z)=A_{n+1}\sigma_1(A_n\sigma_1(\cdots\sigma_1(A_1z+b_1)\cdots)+b_n)+b_{n+1}$ with $n$ hidden layers. On a spatially constant field $v(y)=z$, the affine map $z\mapsto Az+b$ is represented exactly by the integral kernel $A/|D|$ and constant bias $b$. Such constants are exact $\sigma_2$ networks through their output biases. Use these layers after the input layer of step 2.2, placing precisely the $n$ coordinatewise $\sigma_1$ activations of $f$ between them. The final kernel $\kappa(x,y)=|D|^{-1}(q_1(x),\ldots,q_s(x))$ is a $\sigma_3$ network ignoring $y$, so its integral over $D$ sends a constant $v$ to $\widetilde Bv$. This proves that $G(a)=\widetilde Bf(\widetilde E(a))$ belongs to $\mathrm{NO}_{n+2}$ under the indexing convention in [F2]. All intermediate fields are constant and the final output belongs to $U$ for every $a\in A$. [step 2.2, step 2.3, step 2.4, F1, F2, construct, algebra]

3.2 Adding the four errors in steps 2.1–2.4 gives $\sup_K\|T(a)-G(a)\|_U<5\tau<\varepsilon$. This proves the core theorem. The proof in fact only needs continuity of $T$ on $K$ and the continuous injective $L^1$ realization of $A$; it retains all the listed source spaces. [step 2.1, step 2.2, step 2.3, step 2.4, step 3.1, algebra]

4.1 For the corrected additional branch assume $U$ Hilbert, $M>0$, and $\sup_A\|G^\dagger(a)\|_U\le M$. Apply the core construction with an error $0<\gamma<\min(M,\varepsilon/2)$, calling the resulting operator $G_0$. It has the exact form $G_0(a)=\sum_i f_i(\widetilde E(a))q_i$. Choose an orthonormal basis $e_1,\ldots,e_t$ for the finite-dimensional span of the $q_i$, discarding linear dependences, and express $G_0(a)=\sum_jg_j(\widetilde E(a))e_j$. Each $g_j$ is a linear combination of the $f_i$ and hence the same-depth $\sigma_1$ MLP; each $e_j$ is a linear combination of the $q_i$ and hence a same-depth $\sigma_3$ network. If the span is zero the zero operator already suffices. Otherwise $|g(\widetilde E(a))|_2=\|G_0(a)\|_U<M+\gamma<2M$ on $K$. [step 3.1, step 3.2, choose, construct, algebra]

4.2 The set $S=g(\widetilde E(K))$ is compact with radius at most $2M$. Apply the explicitly corrected property in the Statement with $C=2M$ and tolerance $0<\eta<\varepsilon-\gamma$, obtaining $b$. Compose its $\sigma_1$ MLP with $g$ and use final kernel $|D|^{-1}(e_j(x))_j$. By step 3.1 this is an operator $G_1$ of the required architecture. Orthonormality gives $\sup_K\|G_1-G_0\|_U<\eta$ and $\|G_1(a)\|_U=|b(g(\widetilde E(a)))|_2\le2M\le4M$ for every $a\in A$. Thus its approximation error is below $\gamma+\eta<\varepsilon$. The argument handles arbitrary positive $M$ without the source's unjustified normalization $M\ge1$. [step 4.1, F2, construct, algebra]

4.3 The corrected property has concrete instances. For ReLU and a compact $S\subset\mathbb R^q$, suppose $C\ge\sup_S|z|_2$. If $S$ is empty choose zero. If $C=0$, then $S\subset\{0\}$ and again choose zero. If $C>0$, the coordinate clamp $c_j(z)=-C+\operatorname{ReLU}(z_j+C)-\operatorname{ReLU}(z_j-C)$ is an exact ReLU network onto $[-C,C]^q$ and fixes $S$. The radial projection $P$ onto the Euclidean ball of radius $C$ is continuous and fixes $S$. By [F6] approximate $P$ on the cube by a ReLU MLP $p$ with Euclidean error $<\xi$, where $0<2\xi<\eta$. Then $b(z)=Cp(c(z))/(C+\xi)$ is a finite ReLU MLP, globally bounded by $C$, and for $z\in S$ its error is less than $\xi+\xi C/(C+\xi)<2\xi<\eta$. Composition of layered MLPs is a layered MLP because consecutive affine maps merge. ReLU also has linear growth and belongs to every relevant $\mathcal A_0$ by [F6]. Thus this corrected branch is nonvacuous. [F1, F6, construct, algebra]

4.4 For the exact printed additional implication the premise $\sigma_1\in\mathrm{BA}$ is impossible by [F5], so that implication is true but has no instances. Steps 4.1–4.2 establish the explicitly different nonvacuous branch; neither step alters the diameter-based class. This completes all asserted implications. [step 3.2, step 4.2, F5] ∎
