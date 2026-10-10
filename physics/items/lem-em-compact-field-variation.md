---
id: lem-em-compact-field-variation
kind: lemma
title: "Compact variations of the quadratic field functional: first variation and the coefficient equation"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 2
deps: [def-em-minkowski-affine-space, def-euclidean-inner-product, def-ck-euclidean-maps-and-diffeomorphisms, def-directional-and-partial-derivatives, thm-algebra-of-total-derivatives, lem-em-fundamental-variation-lemma, def-weak-derivative-of-a-locally-integrable-function, lem-classical-derivatives-are-weak-derivatives, thm-linearity-of-the-lebesgue-integral-on-l-one, thm-extreme-value-metric, thm-lebesgue-measure-of-a-box-of-every-kind, def-countable-choice, def-test-function-space-d-of-an-open-set, lem-test-function-cutoffs-and-euclidean-localization, thm-heine-borel-rn, thm-compact-subset-is-closed-and-bounded, cor-continuous-functions-are-borel-measurable, def-borel-sigma-algebra, thm-borel-sets-are-lebesgue-measurable, prop-order-and-scalar-rules-for-the-nonnegative-integral, prop-the-nonnegative-integral-agrees-with-the-simple-integral, def-integral-of-a-nonnegative-simple-function, def-integral-over-a-measurable-set, def-integrable-real-and-complex-functions-and-their-integrals, lem-derivative-of-a-power]
dependency_roles:
  def-em-minkowski-affine-space: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-directional-and-partial-derivatives: mathematical-premise
  thm-algebra-of-total-derivatives: mathematical-premise
  lem-em-fundamental-variation-lemma: mathematical-premise
  def-weak-derivative-of-a-locally-integrable-function: mathematical-premise
  lem-classical-derivatives-are-weak-derivatives: mathematical-premise
  thm-linearity-of-the-lebesgue-integral-on-l-one: mathematical-premise
  thm-extreme-value-metric: mathematical-premise
  thm-lebesgue-measure-of-a-box-of-every-kind: mathematical-premise
  def-countable-choice: mathematical-premise
  def-test-function-space-d-of-an-open-set: mathematical-premise
  lem-test-function-cutoffs-and-euclidean-localization: mathematical-premise
  thm-heine-borel-rn: mathematical-premise
  thm-compact-subset-is-closed-and-bounded: mathematical-premise
  cor-continuous-functions-are-borel-measurable: mathematical-premise
  def-borel-sigma-algebra: mathematical-premise
  thm-borel-sets-are-lebesgue-measurable: mathematical-premise
  prop-order-and-scalar-rules-for-the-nonnegative-integral: mathematical-premise
  prop-the-nonnegative-integral-agrees-with-the-simple-integral: mathematical-premise
  def-integral-of-a-nonnegative-simple-function: mathematical-premise
  def-integral-over-a-measurable-set: mathematical-premise
  def-integrable-real-and-complex-functions-and-their-integrals: mathematical-premise
  lem-derivative-of-a-power: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-10
sources:
  references:
    - title: "David Tong, Electromagnetism (University of Cambridge Part II lecture notes), Chapter 5, §5.5.3 'The Maxwell Action', equations (5.42)–(5.43), printed pp. 124–126"
      url: "https://davidtong.org/pdfs/teaching/electromagnetism/electro4.pdf"
    - title: "J. Figueroa-O'Farrill, Brief Notes on the Calculus of Variations (University of Edinburgh), §14 'Classical fields', printed pp. 22–26"
      url: "https://webhomes.maths.ed.ac.uk/~jmf/Teaching/Lectures/CoV.pdf"
---

## Statement

Assume the Axiom of Countable Choice ($\mathrm{AC}_\omega$). Let $U\subseteq\mathbb R^4$ be a bounded open set, let $N\subseteq\mathbb R^4$ be an open neighbourhood of its closure, let $\kappa>0$, and let $A:N\to V=\mathbb R^4$ and $J:N\to V$ be smooth ([[def-ck-euclidean-maps-and-diffeomorphisms]]). Use the Minkowski form $\eta$ and the index conventions of [[def-em-minkowski-affine-space]]: $A^\mu$ denotes the components of $A$ in the standard basis, $A_\nu:=\eta_{\nu\mu}A^\mu$, $F_{\mu\nu}:=\partial_\mu A_\nu-\partial_\nu A_\mu$, $F^{\mu\nu}:=\eta^{\mu\alpha}\eta^{\nu\beta}F_{\alpha\beta}$, and $J^\nu A_\nu$ is the indicated contraction of the components of $J$ with the covector $A_\nu$. Put $L:=-\frac{1}{4\kappa}F_{\mu\nu}F^{\mu\nu}+J^\nu A_\nu$ and $S[A]:=\int_U L\,d\lambda$, the $4$-dimensional Lebesgue integral of $L$ over $U$. Then $S[A]$ is a finite real number, and for every $h\in C_c^\infty(U;V)$, with $h_\nu:=\eta_{\nu\mu}h^\mu$ and $G_{\mu\nu}:=\partial_\mu h_\nu-\partial_\nu h_\mu$: (a) the map $s\mapsto S[A+sh]$ is the quadratic polynomial $S[A]+s\int_U\ell_1\,d\lambda+s^2\int_U\ell_2\,d\lambda$, where $\ell_1:=-\kappa^{-1}F^{\mu\nu}\partial_\mu h_\nu+J^\nu h_\nu$ and $\ell_2:=-\frac{1}{4\kappa}G_{\mu\nu}G^{\mu\nu}$, so that its derivative at $s=0$ is $\int_U\bigl(-\kappa^{-1}F^{\mu\nu}\partial_\mu h_\nu+J^\nu h_\nu\bigr)d\lambda$; (b) that first variation also equals $\int_U\bigl(\kappa^{-1}\partial_\mu F^{\mu\nu}+J^\nu\bigr)h_\nu\,d\lambda$; (c) $A$ is stationary for $S$, meaning that the derivative in (a) vanishes for every $h\in C_c^\infty(U;V)$, if and only if $\partial_\mu F^{\mu\nu}=-\kappa J^\nu$ for every $\nu$ on $U$, all derivatives being classical partial derivatives of the smooth field $A$. This is a pure mathematical statement about the functional $S$: existence of a stationary field $A$ is not asserted, and identifying $\kappa$ with the vacuum permeability, $A$ with a physical potential or $S$ with a physical action is a later physical model choice.

**Conventions.** Repeated Greek indices are summed over $\{0,1,2,3\}$. With $\eta_{\mu\nu}:=\eta(\mathrm e_\mu,\mathrm e_\nu)$ the matrix entries in the ordered basis $(\mathrm e_0,\mathrm e_1,\mathrm e_2,\mathrm e_3)$ one has $\eta_{\mu\nu}=\operatorname{diag}(-1,1,1,1)_{\mu\nu}$, and $\eta^{\mu\nu}$ denotes the entries of the inverse matrix; since $\operatorname{diag}(-1,1,1,1)$ is its own inverse, $\eta^{\mu\nu}=\eta_{\mu\nu}$ and $\eta^{\mu\alpha}\eta_{\alpha\nu}=\delta^\mu_\nu$ ([[def-em-minkowski-affine-space]]). Thus $A_\nu=\eta_{\nu\mu}A^\mu=(-A^0,A^1,A^2,A^3)_\nu$, the lowering map $m\mapsto(m_\nu)_\nu$ is the componentwise involution $m\mapsto(-m^0,m^1,m^2,m^3)$ with inverse $m^\mu=\eta^{\mu\nu}k_\nu=(-k_0,k_1,k_2,k_3)^\mu$, and likewise for $h$. For $h\in C_c^\infty(U;V)$ the zero extension to $N$ is smooth; $A+sh$ denotes the map $x\mapsto A(x)+sh(x)$ on $N$, and $\int_Uf\,d\lambda$ denotes the Lebesgue integral of the zero extension of $f|_U$ to $\mathbb R^4$ ([[def-integrable-real-and-complex-functions-and-their-integrals]], [[def-integral-over-a-measurable-set]]).

## Facts & Assumptions

**Given:** The Axiom of Countable Choice $\mathrm{AC}_\omega$; a bounded open set $U\subseteq\mathbb R^4$; an open $N\supseteq\overline U$; a real $\kappa>0$; smooth maps $A,J:N\to V=\mathbb R^4$; the Minkowski form $\eta$ and conventions of [F1]; $F_{\mu\nu}:=\partial_\mu A_\nu-\partial_\nu A_\mu$, $F^{\mu\nu}:=\eta^{\mu\alpha}\eta^{\nu\beta}F_{\alpha\beta}$, $L:=-\frac{1}{4\kappa}F_{\mu\nu}F^{\mu\nu}+J^\nu A_\nu$ and $S[A]:=\int_U L\,d\lambda$; and, for parts (a)-(c), a fixed $h\in C_c^\infty(U;V)$ with $h_\nu:=\eta_{\nu\mu}h^\mu$ and $G_{\mu\nu}:=\partial_\mu h_\nu-\partial_\nu h_\mu$.

[F1] Minkowski form and index conventions: $V=\mathbb R^4$ has the ordered basis $\mathrm e_0,\dots,\mathrm e_3$, the form $\eta(v,w)=-v_0w_0+v_1w_1+v_2w_2+v_3w_3$ is symmetric bilinear with matrix $\operatorname{diag}(-1,1,1,1)$, that matrix is its own inverse, and nondegeneracy and the tensor-component transformation are as stated there ([[def-em-minkowski-affine-space]]).

[F2] Componentwise smoothness, compact support and zero extension: a map is smooth exactly when all its components are, a member of $C_c^\infty(U;V)$ has compact support in the open $U$ and extends by zero to a smooth compactly supported map on $N$, and constant-coefficient linear combinations of components preserve smoothness and compact support ([[def-ck-euclidean-maps-and-diffeomorphisms]], [[def-test-function-space-d-of-an-open-set]]). Hence $h\mapsto(h_\nu)_\nu$ is a bijection of $C_c^\infty(U;V)$ onto $C_c^\infty(U;\mathbb R^4)$ with inverse $k\mapsto m^\mu:=\eta^{\mu\nu}k_\nu$ by [F1].

[F3] Cutoff functions, in ZF: for compact $K\subseteq\Omega\subseteq\mathbb R^4$ with $\Omega$ open there is $\chi\in C_c^\infty(\Omega)$ with $0\le\chi\le1$ and $\chi=1$ on a neighborhood of $K$ ([[lem-test-function-cutoffs-and-euclidean-localization]]).

[F4] Compactness of the closure: $\overline U$ is closed and, since $U$ is bounded, bounded; a closed bounded subset of $\mathbb R^4$ is compact, with no choice principle ([[thm-heine-borel-rn]]).

[F5] Integrability of continuous compactly supported functions: let $F:\mathbb R^4\to\mathbb R$ be continuous with compact support $K$. If $K=\varnothing$ then $F=0$ and $\int F\,d\lambda=0$; otherwise $M:=\max_K|F|$ is a finite real number ([[thm-extreme-value-metric]]), $K$ is bounded ([[thm-compact-subset-is-closed-and-bounded]]) and hence contained in a closed box $Q$ with $\lambda(Q)<+\infty$ ([[thm-lebesgue-measure-of-a-box-of-every-kind]]), and $|F|\le M\chi_Q$ gives $\int|F|\,d\lambda\le\int M\chi_Q\,d\lambda=M\lambda(Q)<+\infty$ ([[prop-order-and-scalar-rules-for-the-nonnegative-integral]], [[prop-the-nonnegative-integral-agrees-with-the-simple-integral]], [[def-integral-of-a-nonnegative-simple-function]]), so $F$ is integrable ([[def-integrable-real-and-complex-functions-and-their-integrals]]). Under $\mathrm{AC}_\omega$ every continuous map between Euclidean spaces is Borel measurable ([[cor-continuous-functions-are-borel-measurable]]), the Borel sigma-algebra is generated by the open sets ([[def-borel-sigma-algebra]]) and every Borel set is Lebesgue measurable ([[thm-borel-sets-are-lebesgue-measurable]]); consequently, for a continuous $f$ on an open $G\subseteq\mathbb R^4$, the zero extension $f\chi_G$ is Borel measurable, because for $a\ge0$ one has $\{f\chi_G>a\}=G\cap\{f>a\}$, open as $f$ is continuous on the open $G$, while for $a<0$ it is the union of the closed set $\mathbb R^4\setminus G$ and that open set, and the rays $(a,+\infty)$ generate the Borel sigma-algebra.

[F6] Signed integrals, monotonicity and linearity: for measurable real $f$ with at most one of $\int f^+$, $\int f^-$ infinite one sets $\int f\,d\lambda:=\int f^+d\lambda-\int f^-d\lambda$, and $f$ is integrable when both are finite; for nonnegative measurable $f$ the integral over a measurable set $E$ is $\int_Ef\,d\lambda=\int f\chi_E\,d\lambda$; if $0\le f\le h$ are nonnegative measurable then $\int f\,d\lambda\le\int h\,d\lambda$, and if $c>0$ then $\int cf\,d\lambda=c\int f\,d\lambda$, while the zero function has integral $0$; on $L^1$ the integral is linear, $\int(\alpha f+\beta g)\,d\lambda=\alpha\int f\,d\lambda+\beta\int g\,d\lambda$ ([[def-integrable-real-and-complex-functions-and-their-integrals]], [[def-integral-over-a-measurable-set]], [[prop-order-and-scalar-rules-for-the-nonnegative-integral]], [[thm-linearity-of-the-lebesgue-integral-on-l-one]]).

[F7] Partial derivatives and their linearity: for a map on an open subset of $\mathbb R^4$, $\partial_\mu$ is the directional derivative in the standard direction $\mathrm e_\mu$ ([[def-directional-and-partial-derivatives]]), and differentiation is linear, $D(f+cg)=Df+cDg$ for a real constant $c$ ([[thm-algebra-of-total-derivatives]]), so $\partial_\mu(f+cg)=\partial_\mu f+c\,\partial_\mu g$ componentwise.

[F8] Weak derivatives and the test identity, under $\mathrm{AC}_\omega$: a real function $u$ of class $C^1$ on an open $\Omega\subseteq\mathbb R^n$ has each classical partial derivative $\partial_\mu u$ locally integrable and equal to its weak derivative ([[lem-classical-derivatives-are-weak-derivatives]]), so for every test function $\psi\in C_c^\infty(\Omega;\mathbb R)$ the defining test identity of the weak derivative gives $\int_\Omega u\,\partial_\mu\psi\,d\lambda=-\int_\Omega(\partial_\mu u)\psi\,d\lambda$ ([[def-weak-derivative-of-a-locally-integrable-function]]).

[F9] Polynomial derivative: for real $a_0,a_1,a_2$ the polynomial function $P(s)=a_0+a_1s+a_2s^2$ is differentiable at every real $c$, and $P'(c)=a_1+2a_2c$; in particular $P'(0)=a_1$, the term $a_0$ contributing $0$ and the term $a_2s^2$ contributing $2a_2c$ ([[lem-derivative-of-a-power]], clause 4).

[F10] Fundamental variation lemma, under $\mathrm{AC}_\omega$: if a continuous $g:U\to\mathbb R^m$ on an open $U\subseteq\mathbb R^n$ satisfies $\int_U\langle g,k\rangle\,d\lambda=0$ for every $k\in C_c^\infty(U;\mathbb R^m)$, then $g=0$ on $U$ ([[lem-em-fundamental-variation-lemma]]).

[F11] Euclidean inner product: $\langle x,y\rangle=\sum_{i<m}x_iy_i$ on $\mathbb R^m$, so $\sum_{\nu}C^\nu h_\nu=\langle C,k\rangle$ for the arrays $C=(C^0,\dots,C^3)$ and $k=(h_0,\dots,h_3)$ ([[def-euclidean-inner-product]]).

## Proof

**Proof technique:** direct; expand the functional along a compactly supported variation, move the derivative onto the coefficient with the weak-derivative test identity, and read off the coefficient equation with the fundamental variation lemma.

1.1 The conventions of [F1] fix the index conventions of the Statement, and $x\mapsto F_{\mu\nu}(x)$ and $x\mapsto F^{\mu\nu}(x)$ are smooth on $N$ because $A$ is smooth and $\eta^{\mu\alpha}\eta^{\nu\beta}$ is constant; hence $L$ is smooth on $N$. The closure $\overline U$ is a compact subset of $N$ by [F4], so [F3] with $\Omega:=N$ and $K:=\overline U$ yields $\chi\in C_c^\infty(N)$ with $0\le\chi\le1$ and $\chi=1$ on $\overline U$. [given, F1, F3, F4]

2.1 The product $L\chi$, defined to be $0$ outside $\operatorname{supp}\chi$, is continuous with compact support, so $\int_{\mathbb R^4}|L\chi|\,d\lambda<+\infty$ by [F5]; since $\chi=1$ on $U$, the nonnegative measurable functions $|L|\chi_U$ and $|L|\chi$ satisfy $|L|\chi_U\le|L|\chi$ pointwise on $\mathbb R^4$, so [F6] gives $\int_U|L|\,d\lambda\le\int_{\mathbb R^4}|L\chi|\,d\lambda<+\infty$; hence $L$ is integrable over $U$ and $S[A]=\int_U L\,d\lambda$ is a finite real number. [step 1.1, F5, F6]

2.2 The zero extension of $h$ to $N$ is smooth with compact support in $U$ by [F2], and for every real $s$ the map $A+sh:N\to V$ is smooth with components $(A+sh)_\nu=A_\nu+sh_\nu$ by [F1] and [F7]; every product below vanishes outside the compact set $\operatorname{supp}h\subseteq U$, so the corresponding integrands are continuous with compact support and integrable by [F5]. [step 1.1, F1, F2, F5, F7]

3.1 For every real $s$ and all $\mu,\nu$ one has $F(s)_{\mu\nu}=F_{\mu\nu}+sG_{\mu\nu}$ and $F(s)^{\mu\nu}=F^{\mu\nu}+sG^{\mu\nu}$ on $U$, where $F(s)_{\mu\nu}:=\partial_\mu(A+sh)_\nu-\partial_\nu(A+sh)_\mu$ and $F(s)^{\mu\nu}:=\eta^{\mu\alpha}\eta^{\nu\beta}F(s)_{\alpha\beta}$: the first identity is linearity of the partial derivative, $\partial_\mu(A_\nu+sh_\nu)=\partial_\mu A_\nu+s\partial_\mu h_\nu$ and $\partial_\nu(A_\mu+sh_\mu)=\partial_\nu A_\mu+s\partial_\nu h_\mu$ [F7], and the second follows by multiplying by the constant coefficients $\eta^{\mu\alpha}\eta^{\nu\beta}$ and collecting terms [F1]. [step 2.2, F1, F7]

4.1 Multiplying out with step 3.1 gives $F(s)_{\mu\nu}F(s)^{\mu\nu}=F_{\mu\nu}F^{\mu\nu}+2sF_{\mu\nu}G^{\mu\nu}+s^2G_{\mu\nu}G^{\mu\nu}$, and $F_{\mu\nu}G^{\mu\nu}=F^{\mu\nu}G_{\mu\nu}=2F^{\mu\nu}\partial_\mu h_\nu$: the first equality renames the summation indices, and in the second one substitutes $G_{\mu\nu}=\partial_\mu h_\nu-\partial_\nu h_\mu$, relabels $\mu\leftrightarrow\nu$ in the second sum and uses $F^{\nu\mu}=-F^{\mu\nu}$, so the two sums coincide. Since $(A+sh)_\nu=A_\nu+sh_\nu$, the source term is $J^\nu(A+sh)_\nu=J^\nu A_\nu+sJ^\nu h_\nu$, and therefore $L(A+sh)=L+s\ell_1+s^2\ell_2$ pointwise on $U$ with $\ell_1=-\kappa^{-1}F^{\mu\nu}\partial_\mu h_\nu+J^\nu h_\nu$ and $\ell_2=-\frac{1}{4\kappa}G_{\mu\nu}G^{\mu\nu}$. [step 3.1, algebra]

5.1 The functions $L$, $\ell_1$, $\ell_2$ are integrable over $U$ by steps 2.1 and 2.2, so linearity of the integral [F6] applied to step 4.1 gives $S[A+sh]=\int_U(L+s\ell_1+s^2\ell_2)\,d\lambda=S[A]+s\int_U\ell_1\,d\lambda+s^2\int_U\ell_2\,d\lambda$ for every real $s$; thus $s\mapsto S[A+sh]$ is the polynomial $P(s)=a_0+a_1s+a_2s^2$ with the finite real coefficients $a_0=S[A]$, $a_1=\int_U\ell_1\,d\lambda$ and $a_2=\int_U\ell_2\,d\lambda$, and [F9] gives $P'(0)=a_1=\int_U\bigl(-\kappa^{-1}F^{\mu\nu}\partial_\mu h_\nu+J^\nu h_\nu\bigr)d\lambda$. This is (a). [step 2.1, step 2.2, step 4.1, F6, F9]

6.1 For each fixed $\nu$ the functions $x\mapsto F^{\mu\nu}(x)$, $\mu=0,1,2,3$, are of class $C^1$ on the open $U$ by step 1.1, and $h_\nu\in C_c^\infty(U;\mathbb R)$ by [F2]; applying [F8] to each of the four functions and summing over $\mu$ gives $\int_U F^{\mu\nu}\partial_\mu h_\nu\,d\lambda=-\int_U(\partial_\mu F^{\mu\nu})h_\nu\,d\lambda$. Substituting this into step 5.1 and using linearity [F6] yields $\int_U\ell_1\,d\lambda=\int_U\bigl(\kappa^{-1}\partial_\mu F^{\mu\nu}+J^\nu\bigr)h_\nu\,d\lambda$, which is (b). [step 5.1, F2, F6, F8]

7.1 Put $C^\nu:=\kappa^{-1}\partial_\mu F^{\mu\nu}+J^\nu$; each $C^\nu$ is continuous on $U$ by step 1.1, and by steps 5.1 and 6.1 the first variation of $S$ at $A$ in the direction $h$ equals $\int_UC^\nu h_\nu\,d\lambda=\int_U\langle C,k\rangle\,d\lambda$, where $k:=(h_\nu)_\nu\in C_c^\infty(U;\mathbb R^4)$ and the pairing is that of [F11]. Assume first that $A$ is stationary, so that this first variation vanishes for every $h\in C_c^\infty(U;V)$. Given any $k\in C_c^\infty(U;\mathbb R^4)$, [F2] provides $h\in C_c^\infty(U;V)$ with $h_\nu=k_\nu$, so $\int_U\langle C,k\rangle\,d\lambda=0$; the fundamental variation lemma [F10] applied to the continuous array $C$ gives $C=0$ on $U$, that is $\partial_\mu F^{\mu\nu}=-\kappa J^\nu$ on $U$ for every $\nu$. [step 5.1, step 6.1, F2, F10, F11]

8.1 Conversely, if $\partial_\mu F^{\mu\nu}=-\kappa J^\nu$ on $U$ for every $\nu$, then $C=0$ and steps 5.1 and 6.1 give vanishing first variation for every $h\in C_c^\infty(U;V)$, so $A$ is stationary; hence stationarity is equivalent to the coefficient equation, which is (c). The point $h\in C_c^\infty(U;V)$ was arbitrary throughout, so (a)-(c) hold as stated; existence of a stationary field $A$ and the identifications of $\kappa$, $A$ and $J$ with physical quantities are not asserted, and the Axiom of Countable Choice entered only through [F5], [F8] and [F10], the expansions of steps 3.1-5.1 being choice-free. [step 5.1, step 6.1, step 7.1, given] ∎
