---
id: ex-cft-2d-noncompact-free-boson-correlators
kind: example
title: Exact chiral free-boson stress tensor and vertex OPE
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 3
deps:
  - def-cft-2d-stress-tensor-data
  - def-cft-2d-radial-operator-product-expansion
  - def-cft-2d-radial-quantization
  - def-rank-one-heisenberg-vertex-algebra
  - thm-rank-one-heisenberg-vertex-operator-algebra
justified_by: []
domain: mathematics
library: mathematics
dependency_roles:
  def-cft-2d-stress-tensor-data: mathematical-premise
  def-cft-2d-radial-operator-product-expansion: mathematical-premise
  def-cft-2d-radial-quantization: mathematical-premise
  def-rank-one-heisenberg-vertex-algebra: mathematical-premise
  thm-rank-one-heisenberg-vertex-operator-algebra: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Paul Ginsparg, Applied Conformal Field Theory, Les Houches lectures (1988)
      url: https://arxiv.org/pdf/hep-th/9108028
      locator: "§2.3, printed pp. 21–24, equations (2.14)–(2.19); §3.1, printed pp. 26–29, equation (3.1)."
    - title: Christophe Nozaradan, Introduction to Vertex Algebras, arXiv:0809.1380v3
      url: https://arxiv.org/pdf/0809.1380
      locator: "§2.7.3, PDF pp. 38–40; §3.4, PDF pp. 47–49; §4.3, PDF pp. 67–72: Heisenberg currents, formal products and normal ordering."
verification:
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Example

Let $P=\mathbb C[x_1,x_2,\ldots]$ be the polynomial space of [[def-rank-one-heisenberg-vertex-algebra]], and let $a_{-n}=x_n\cdot$, $a_n=n\,\partial_{x_n}$ for $n\ge1$, with $a_0=0$. Use the finite-particle domain $P$: each polynomial contains finitely many monomials and variables, and every fixed coefficient of a normally ordered mode product acts by a finite sum. The exact imported theorem [[thm-rank-one-heisenberg-vertex-operator-algebra]] verifies that these data give an algebraic conformal VOA of CFT type with conformal vector $\omega=\tfrac12x_1^2$, central charge $1$, and modes $L(n)=\frac12\sum_k:a_ka_{n-k}:$. This imported theorem is used at its exact polynomial, algebraic scope; it supplies no Hilbert completion, convergent operator product, compactification, or noncompact path-integral measure.

For the vertex-field extension, let $\mathcal V=\bigoplus_{\gamma\in\mathbb R}P|\gamma\rangle$ be the algebraic direct sum of charge-labelled copies of $P$. Define $p|\gamma\rangle=\gamma|\gamma\rangle$ and $E_\alpha|\gamma\rangle=|\gamma+\alpha\rangle$, so $pE_\alpha-E_\alpha p=\alpha E_\alpha$ and $E_\alpha E_\beta=E_{\alpha+\beta}$. For the oscillator current $a(z)=\sum_{n\in\mathbb Z}a_nz^{-n-1}$, set $J(z)=p/z+a(z)$ and $\partial X(z)=-iJ(z)$. Define the charge field, on the finite-particle domain, by the formal normally ordered expression
$$V_\alpha(z):=E_\alpha z^{\alpha p} \exp\!\left(\alpha\sum_{n\ge1}\frac{a_{-n}}{n}z^n\right) \exp\!\left(-\alpha\sum_{n\ge1}\frac{a_n}{n}z^{-n}\right), \qquad \alpha\in\mathbb R.$$
The symbol $z^{\alpha p}$ acts on $|\gamma\rangle$ as $z^{\alpha\gamma}|\gamma\rangle$; powers are fixed on a simply connected radial chart avoiding $0$. Normal ordering places all creation modes $a_{-n}$ to the left of annihilation modes $a_n$. Let $\Omega=|0\rangle$ be the charge-zero oscillator vacuum. Define $\varepsilon:\mathcal V\to\mathbb C$ to select the coefficient of $\Omega$ in the charge-zero summand and to send nonzero charges and positive oscillator-degree monomials to zero. For radially ordered insertions $|z_1|>\cdots>|z_N|>0$, set
$$C(\alpha_1,z_1;\ldots;\alpha_N,z_N):=\varepsilon\!\left(V_{\alpha_1}(z_1)\cdots V_{\alpha_N}(z_N)\Omega\right).$$
This is an algebraic zero-mode prescription, not a path-integral expectation. Define the chiral contraction shorthand by
$$\langle X(z)X(w)\rangle_{\mathrm{contr}}=-\log(z-w)$$
on the chosen branch for $|z|>|w|$; it is a Wick contraction, not a full vacuum expectation. Its oscillator part is $-\log(1-w/z)$, while the charge factor $z^{\alpha p}$ supplies the remaining $z^{\alpha\beta}$ in the vertex product.

The stress field is
$$T(z):=-\frac12:\partial X(z)\partial X(z):=\frac12:J(z)J(z):.$$
Products are expanded formally in the radial region $|z|>|w|>0$, with branch data as in [[def-cft-2d-radial-operator-product-expansion]]. In the stress formulas, $\sim$ denotes only the principal part specified by the stress-tensor datum. The vertex product in step 1.4 includes the full normally ordered factor and its formal Taylor expansion in $s=z-w$ around $w\ne0$. These are coefficientwise identities, with no analytic convergence or full CFT existence assertion.

## Example references

[[def-cft-2d-stress-tensor-data]]

[[def-cft-2d-radial-operator-product-expansion]]

[[def-cft-2d-radial-quantization]]

[[def-rank-one-heisenberg-vertex-algebra]]

[[thm-rank-one-heisenberg-vertex-operator-algebra]]

## Facts & Assumptions

**Given:** The finite-particle oscillator domain, the charge-labelled algebraic extension, normal ordering as stated above, and the radial expansion region $|z|>|w|>0$.

[F1] [[def-rank-one-heisenberg-vertex-algebra]]: $P=\mathbb C[x_1,x_2,\ldots]$, $a_{-n}=x_n\cdot$, $a_n=n\partial_{x_n}$, $a_0=0$, and the current is $a(z)=\sum a_nz^{-n-1}$.

[F2] [[thm-rank-one-heisenberg-vertex-operator-algebra]]: the oscillator data in [F1] give an algebraic conformal vertex algebra with conformal vector $\omega=\frac12x_1^2$, central charge $1$, and modes $L(n)=\frac12\sum_{k\in\mathbb Z}{:}a_k a_{n-k}{:}$. Its polynomial modes are finite on each fixed polynomial; the theorem makes no Hilbert or analytic-convergence claim.

[F3] [[def-cft-2d-stress-tensor-data]]: the stress principal part is $c/(2(z-w)^4)+2T(w)/(z-w)^2+\partial_wT(w)/(z-w)$, with radial residues on the declared formal domain.

[F4] [[def-cft-2d-radial-operator-product-expansion]]: $|z|>|w|$ is the expansion region, and a formal OPE is coefficientwise data rather than a convergence assertion.

[A1] The charge extension is the algebraic direct sum $\mathcal V=\bigoplus_{\gamma\in\mathbb R}P|\gamma\rangle$, with $p|\gamma\rangle=\gamma|\gamma\rangle$, $E_\alpha|\gamma\rangle=|\gamma+\alpha\rangle$, and vertex fields and vacuum coefficient as defined in the Example.

[A2] The Wick contraction convention is $\langle X(z)X(w)\rangle_{\mathrm{contr}}=-\log(z-w)$ on the chosen branch. Differentiation gives $\langle J(z)J(w)\rangle_{\mathrm{contr}}=(z-w)^{-2}$ and $\langle J(z)V_\alpha(w)\rangle_{\mathrm{contr}}=\alpha(z-w)^{-1}V_\alpha(w)$. Its oscillator part is the radial series $\sum_{n\ge1}(w/z)^n/n=-\log(1-w/z)$.

## Verification

**Proof technique:** direct.

**Given:** [F1]–[F4], [A1]–[A2], and the algebraic charge-field definitions.

1.1 For $m,n>0$ or $m,n<0$, the operators in [F1] commute. For $m>0,n=-r<0$, $[a_m,a_n]=[m\partial_{x_m},x_r]=m\delta_{m,r}I$; reversing $m,n$ changes the sign. Thus $[a_m,a_n]=m\delta_{m,-n}I$ for all integer indices, including $a_0=0$. The current contraction is
$$\sum_{n\ge1}n z^{-n-1}w^{n-1} =z^{-2}\sum_{n\ge1}n(w/z)^{n-1} =\frac{1}{(z-w)^2}.$$
The geometric-series identity is valid in the formal radial region. [F1, A2, algebra]

1.2 The double contraction in $T(z)T(w)$ pairs the two $J$'s in two ways, giving $\frac12(z-w)^{-4}$. The single contractions leave
$$\frac{:J(z)J(w):}{(z-w)^2} =\frac{2T(w)}{(z-w)^2}+\frac{\partial T(w)}{z-w}+O(1),$$
because the formal Taylor expansion gives $J(z)=J(w)+(z-w)\partial J(w)+O((z-w)^2)$. Hence
$$T(z)T(w)\sim\frac{1/2}{(z-w)^4}+\frac{2T(w)}{(z-w)^2}+\frac{\partial T(w)}{z-w}.$$
Comparing with [F3] gives $c/2=1/2$, so $c=1$, in agreement with [F2]. [F1, F2, F3, algebra]

1.3 Pairing each of the two currents in $T(z)=\frac12:J(z)J(z):$ with $V_\alpha(w)$ gives the double-pole coefficient
$$\frac12\left(\frac{\alpha}{z-w}\right)^2V_\alpha(w) =\frac{\alpha^2}{2}\frac{V_\alpha(w)}{(z-w)^2}.$$
The two single contractions give
$$\frac{\alpha:J(z)V_\alpha(w):}{z-w} =\frac{\partial_w V_\alpha(w)}{z-w}+O(1),$$
indeed, write $V_\alpha(z)=E_\alpha z^{\alpha p}C_\alpha(z)A_\alpha(z)$, with $C_\alpha$ and $A_\alpha$ its creation and annihilation exponentials. Differentiating the four factors gives
$$\partial_zV_\alpha=\alpha E_\alpha z^{\alpha p}\left[\left(\frac pz+\sum_{n\ge1}a_{-n}z^{n-1}\right)C_\alpha A_\alpha+C_\alpha\left(\sum_{n\ge1}a_nz^{-n-1}\right)A_\alpha\right]=\alpha:J V_\alpha:,$$
where the normal ordering places creation modes left and the zero mode to the right of $E_\alpha z^{\alpha p}$. The remaining terms are regular, so $T(z)V_\alpha(w)\sim\frac{\alpha^2}{2}\frac{V_\alpha(w)}{(z-w)^2}+\frac{\partial_wV_\alpha(w)}{z-w}$, and $h(V_\alpha)=\alpha^2/2$. [F3, A2, algebra]

1.4 Write the annihilation exponential of $V_\alpha(z)$ as $e^{A_\alpha(z)}$, $A_\alpha(z)=-\alpha\sum_{n\ge1}a_nz^{-n}/n$, and the creation exponential of $V_\beta(w)$ as $e^{B_\beta(w)}$, $B_\beta(w)=\beta\sum_{n\ge1}a_{-n}w^n/n$. Their commutator is central:
$$[A_\alpha(z),B_\beta(w)]=-\alpha\beta\sum_{n\ge1}\frac{(w/z)^n}{n} =\alpha\beta\log(1-w/z).$$
The formal Baker–Campbell–Hausdorff identity therefore contributes $(1-w/z)^{\alpha\beta}$. Commuting $z^{\alpha p}$ past $E_\beta$ contributes $z^{\alpha\beta}$, and $E_\alpha E_\beta=E_{\alpha+\beta}$. The product of scalar factors is $z^{\alpha\beta}(1-w/z)^{\alpha\beta}=(z-w)^{\alpha\beta}$; after extracting these scalars, the remaining zero-mode factor is $E_{\alpha+\beta}z^{\alpha p}w^{\beta p}$, and the oscillator factors are the normally ordered creation and annihilation exponentials. More explicitly, define the bilocal normally ordered factor
$$N_{\alpha,\beta}(z,w):=E_{\alpha+\beta}z^{\alpha p}w^{\beta p}\exp\!\left(\sum_{n\ge1}\frac{a_{-n}}n(\alpha z^n+\beta w^n)\right)\exp\!\left(-\sum_{n\ge1}\frac{a_n}n(\alpha z^{-n}+\beta w^{-n})\right).$$
The exact radial identity is $V_\alpha(z)V_\beta(w)=(z-w)^{\alpha\beta}N_{\alpha,\beta}(z,w)$, where the scalar power is expanded as $z^{\alpha\beta}(1-w/z)^{\alpha\beta}$ on the chosen branch. For the local expansion set $s=z-w$, expand every $(w+s)^q$ binomially in $s/w$, and put $D_k(w):=\frac1{k!}(\partial_z^kN_{\alpha,\beta})(w,w)$ for integers $k\ge0$. These are formal coefficient fields: on a fixed input polynomial the annihilation exponential is finite, and at each fixed oscillator degree the creation coefficients and their derivatives are finite sums. Consequently the Taylor expansion is well defined coefficientwise and gives the full generalized-power OPE
$$V_\alpha(w+s)V_\beta(w)=s^{\alpha\beta}\sum_{k\ge0}s^kD_k(w),\qquad D_0(w)=V_{\alpha+\beta}(w).$$
This local re-expansion uses $|s|<|w|$ as its binomial-expansion convention, distinct from the original radial expansion; neither is an assertion of numerical convergence of the field series. The leading fused term alone is $s^{\alpha\beta}V_{\alpha+\beta}(w)$; the $k\ge1$ fields retain all regular descendants.
[A1, A2, F4, algebra]

2.1 For each pair $i<j$, commuting the annihilation exponential of the outer field $V_{\alpha_i}(z_i)$ through the creation exponential of $V_{\alpha_j}(z_j)$ contributes $(1-z_j/z_i)^{\alpha_i\alpha_j}$ by the central-commutator calculation of step 1.4. Moving the outer zero-mode factor past the later charge shift contributes $z_i^{\alpha_i\alpha_j}$. Their product is $(z_i-z_j)^{\alpha_i\alpha_j}$ in the radial region $|z_j/z_i|<1$. After all such pairwise commutations, $\varepsilon$ kills every positive oscillator-degree term and every nonzero total charge. Therefore
$$C(\alpha_1,z_1;\ldots;\alpha_N,z_N)= \begin{cases} \displaystyle\prod_{1\le i<j\le N}(z_i-z_j)^{\alpha_i\alpha_j},&\sum_i\alpha_i=0,\\ 0,&\sum_i\alpha_i\ne0. \end{cases}$$
The powers use the fixed radial branches. If any $\alpha_i=0$, its field is the identity and every factor involving it equals $1$, reducing the formula to the $N-1$-field formula. The neutrality condition is for the declared algebraic vacuum functional, not a full scalar path integral. [A1, A2, step 1.4, algebra]

3.1 If $\alpha=0$, the charge shift is the identity, $V_0=I$, the weight $\alpha^2/2$ is zero, and both OPEs reduce to the identity-field cases; if $\alpha\beta=0$, the scalar vertex factor has no branch because its exponent is zero. If $N=1$, the functional gives $1$ for $\alpha_1=0$ and $0$ otherwise, matching the empty product and charge-neutrality rule. These are the zero-charge and one-insertion boundary cases. The example asserts no compactification, winding sectors, or physical path-integral measure. [step 1.3, step 1.4, step 2.1, algebra] ∎
