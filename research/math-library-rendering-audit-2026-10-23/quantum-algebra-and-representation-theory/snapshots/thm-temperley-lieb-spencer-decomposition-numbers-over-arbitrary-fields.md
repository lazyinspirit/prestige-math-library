---
id: thm-temperley-lieb-spencer-decomposition-numbers-over-arbitrary-fields
kind: theorem
title: "Spencer decomposition numbers over arbitrary fields"
status: published
dependency_level: 10
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
deps:
  - def-temperley-lieb-spencer-digit-support
  - thm-temperley-lieb-link-state-diagram-basis-is-cellular
  - cor-temperley-lieb-nonzero-cell-forms-classify-simple-modules
  - lem-temperley-lieb-link-state-restriction-filtration
  - lem-temperley-lieb-exact-truncation-reduces-decomposition-to-trivial-factors
  - lem-temperley-lieb-spencer-support-binomial-and-reflection-calculus
  - lem-temperley-lieb-signed-forest-candidates-and-their-composition
  - lem-temperley-lieb-support-character-carry-and-simple-extras
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Robert A. Spencer, The Modular Temperley–Lieb Algebra"
      url: "https://arxiv.org/pdf/2011.01328"
      locator: "Theorem 8.4, with Theorems 8.1 and 8.3. The local proof reconstructs the lower bound by a submodule-functional cube induction and the upper bound by a carry recursion and Gram units."
    - title: "Anton Cox, John Graham and Paul Martin, The blob algebra in positive characteristic"
      url: "https://openaccess.city.ac.uk/id/eprint/377/2/cgm.pdf"
      locator: "§5: candidate-morphism construction and composition, supplied locally with the positive-loop sign correction."
---

## Statement

Let $K$ be any field, let $\delta\in K$, and let $\ell$ be its recurrence quantum characteristic. Put $P=\operatorname{char}K$ when the characteristic is positive and $P=\infty$ otherwise. Let $n\ge0$, let $m,r\in\{0,1,\ldots,n\}$ have parity $n$, and let $D_{n,r}=W_{n,r}/\operatorname{rad}\phi_{n,r}$ be nonzero. Then
$$[W_{n,m}:D_{n,r}]=\begin{cases}1,&m\in\operatorname{Supp}_{\ell,P}(r),\\0,&m\notin\operatorname{Supp}_{\ell,P}(r).\end{cases}$$
Here the support is formed from the digits of $r+1$ as in [[def-temperley-lieb-spencer-digit-support]]. In particular, every composition multiplicity is zero or one. This includes $\ell=\infty$, finite $\ell$ in characteristic zero, arbitrary positive characteristic, $\delta=\pm2$, and characteristic two. When $n>0$ is even and $\delta=0$, the label $r=0$ has zero form quotient and is excluded by the nonzero-simple hypothesis; its standard module $W_{n,0}$ remains among the modules classified by the formula. At $n=0$, $D_{0,0}=W_{0,0}=K$.

## Facts & Assumptions

**Given:** The field, loop parameter, rank, labels, right standard modules and nonzero simple quotients in the Statement.

[F1] The diagram basis is cellular, its cell form acts by the coefficient-of-identity rank-one rule, and its nonzero form quotients give all absolutely simple modules with pairwise distinct labels ([[thm-temperley-lieb-link-state-diagram-basis-is-cellular]], [[cor-temperley-lieb-nonzero-cell-forms-classify-simple-modules]]).

[F2] Restriction of $W_{n,m}$ to rank $n-1$ has factors $W_{n-1,m-1}$ and $W_{n-1,m+1}$ ([[lem-temperley-lieb-link-state-restriction-filtration]]). Exact truncation gives $[W_{n,m}:D_{n,r}]=[W_{r,m}:D_{r,r}]$ whenever $D_{n,r}\ne0$, and $D_{r,r}$ is the trivial diagram module ([[lem-temperley-lieb-exact-truncation-reduces-decomposition-to-trivial-factors]]).

[F3] Support signs give a Boolean cube on nonzero lower digits, full-prefix sign changes give reflections in place-value walls, and candidate-composition binomials on comparable cube elements are nonzero ([[lem-temperley-lieb-spencer-support-binomial-and-reflection-calculus]]).

[F4] The signed forest candidates $v_{a,b}$ have chain coefficient $1$, compose by the stated quantum binomials, and give genuine homomorphisms under the strict wall inequalities ([[lem-temperley-lieb-signed-forest-candidates-and-their-composition]]).

[F5] The support-character carry coefficients $\beta_{n,r}$ are nonnegative, have $\beta_{n,n}=1$, satisfy the scalar restriction identity, and every extra positive coefficient belongs to a simple standard. In the zero-loop, positive even-rank case $\beta_{n,0}=0$ ([[lem-temperley-lieb-support-character-carry-and-simple-extras]]).

## Proof

**Given:** The data and hypotheses in the Statement.

1.1 We first record the triangular facts used below. Let $I_t$ be the ideal spanned by diagrams of propagation at most $t$, with $I_{-1}=I_{-2}=0$. The action on $W_{n,m}$ kills $I_{m-2}$, because propagation cannot increase. On a nonzero $D_{n,r}$, the ideal $I_r$ acts nontrivially: the cellular rule $xC^r_{u,v}=\phi_{n,r}(x,u)v$ gives a nonzero operator since the form is nonzero. Thus a composition factor of $W_{n,m}$ cannot have label $r<m$. If $D_{n,m}\ne0$, the same rank-one rule shows that $I_m$ kills the form radical, while $W_{n,m}$ modulo this radical is $D_{n,m}$. Therefore this label has multiplicity exactly one; every other factor has larger label. If $m=0,\delta=0,n>0$, the form is identically zero, so this label contributes no simple quotient. These are all cases because a link state has nonzero form whenever $m>0$ or $\delta\ne0$: at nonzero loop use its self-pairing, and at positive $m$ use the two shifted adjacent-cup states whose gluing has no loop. [F1, F2, given, algebra]

2.1 Write $d(N,m)=1$ when $m\in\operatorname{Supp}(N)$ and $0$ otherwise. We prove the lower bound for the trivial-factor multiplicity $t(N,m)=[W_{N,m}:D_{N,N}]$. Call $v_{N,m}$ embodied if there are a submodule $U\subseteq W_{N,m}$ containing it and a module map $q:U\to D_{N,N}$ with $q(v_{N,m})\ne0$. This implies $t(N,m)\ge1$. If the support is a singleton, its only label is $N$ and the assertion is immediate. Otherwise write $N+1=\sum_{i=0}^r n_is_i$ with $r\ge1$ and let $\mu=n_rs_r-\sum_{i<r}n_is_i-1$. The pair $N,\mu$ is a reflection about the $s_r$-wall below $N$, with $0<N-\mu<2s_r$ and $N+\mu+2=2n_rs_r$. Thus [F4] gives a nonzero homomorphism $W_{N,N}\to W_{N,\mu}$ carrying its basis vector to $v_{N,\mu}$. Its image is an actual trivial submodule, so this vector is embodied. [F3, F4, step 1.1, construct, algebra]

3.1 We propagate this property across the cube. Consider any subcube with higher signs fixed and all lower nonzero digits up to index $j$ variable. Let $h$ be its maximal label, with all variable signs positive, and $l$ its minimal label, with all variable signs negative; suppose $v_{N,l}$ is embodied. We show all its labels are embodied by induction on the number of variable digits. If there are none, this is the assumption. Otherwise split at its largest variable index $j$. The minus-half has minimum $l$. The plus-half has minimum $a$, obtained by retaining the positive sign at $j$ and making every smaller variable sign negative. Full-prefix reflections give genuine homomorphisms $f:W_{N,h}\to W_{N,a}$ and $H:W_{N,h}\to W_{N,l}$ by [F4], using the identity map for $f$ if $a=h$. All three labels are comparable cube elements, so [F3]–[F4] give $gf=\lambda H$ with $\lambda\ne0$, where $g:W_{N,a}\to W_{N,l}$ is the linear candidate map. This makes $g$ a module map on $I=\operatorname{im}f$: for any algebra element and any preimage in $W_{N,h}$, the equality with the genuine map $H$ verifies intertwining, and $f$ is surjective onto $I$. Moreover $f(v_{N,h})$ is a nonzero multiple of $v_{N,a}$ and $g(v_{N,a})$ is a nonzero multiple of $v_{N,l}$, again because their candidate-composition scalars are nonzero. If $U_l,q_l$ embody $v_{N,l}$, the submodule $I\cap g^{-1}(U_l)$ and the functional $q_lg$ therefore embody $v_{N,a}$. Apply induction to both smaller halves. The whole support cube starts with its embodied minimum from step 2.1, proving $t(N,m)\ge d(N,m)$ for every field and every support label. [F3, F4, step 2.1, algebra]

4.1 We now prove equality by induction on $n$, the case $n=0$ being the one-dimensional algebra. Suppose the full decomposition formula holds at smaller ranks. For each label $m$ put $t_m=t(n,m)$ and let $u_m$ be the multiplicity of the rank-$(n-1)$ trivial module in the restriction of $W_{n,m}$. By [F2] and induction, $u_m=d(n-1,m-1)+d(n-1,m+1).$ For each nonzero simple $D_{n,r}$ let $b_r$ be the multiplicity of that trivial module in its restriction; these are nonnegative integers, and $b_n=1$. For $r<n$, [F2] and induction already give $[W_{n,m}:D_{n,r}]=d(r,m)$. It remains only to determine the $t_m$. [F1, F2, step 1.1, step 3.1, algebra]

5.1 Treat labels $m<n$ in decreasing order, assuming $t_r=d(n,r)$ and $b_r=\beta_{n,r}$ at all larger labels. If $D_{n,m}\ne0$, step 1.1 and restriction of a composition series give $u_m=t_m+b_m+\sum_{m<r<n}d(r,m)b_r.$ The carry identity [F5] gives $u_m=d(n,m)+\beta_{n,m}+\sum_{m<r<n}d(r,m)\beta_{n,r}.$ Subtracting and using the descending assumption yields $t_m+b_m=d(n,m)+\beta_{n,m}$. If $\beta_{n,m}=0$, the lower bound of step 3.1 and $b_m\ge0$ force $t_m=d(n,m)$ and $b_m=0$. If $\beta_{n,m}>0$, [F5] makes $W_{n,m}$ simple. Since $m<n$, its simple label is different from $n$, so $t_m=0$; step 3.1 then forces $d(n,m)=0$, and the same equality gives $b_m=\beta_{n,m}$. This completes the descending step whenever the diagonal simple exists. [F1, F2, F5, step 1.1, step 3.1, step 4.1, algebra]

6.1 The only missing diagonal is $m=0,\delta=0,n>0$ even. Here $D_{n,0}=0$ by step 1.1, so restriction of a composition series gives $u_0=t_0+\sum_{0<r<n}d(r,0)b_r$ with no $b_0$ term. By [F5], $\beta_{n,0}=0$, and all larger $b_r$ already equal their carry values. The carry identity consequently gives $t_0=d(n,0)$ directly. Thus the exceptional zero-form standard is classified too, and no nonexistent simple has been inserted. The case $n=1$ is covered by the initial top label and needs no descending step. [F1, F2, F5, step 1.1, step 4.1, step 5.1, algebra]

7.1 We have proved $[W_{n,m}:D_{n,n}]=d(n,m)$ at rank $n$, completing the induction by steps 4.1–6.1. Finally, for any nonzero $D_{n,r}$, exact truncation [F2] identifies its desired multiplicity with $[W_{r,m}:D_{r,r}]=d(r,m)$, which is precisely the formula in the Statement. All arguments were over the given field or polynomial identities valid after its extension, and the zero-loop, zero-defect exception was explicitly handled. Hence the formula has every asserted field, characteristic and quantum-characteristic branch. [F2, step 3.1, step 4.1, step 5.1, step 6.1, algebra] ∎
