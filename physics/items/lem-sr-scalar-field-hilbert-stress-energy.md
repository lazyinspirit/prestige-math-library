---
id: lem-sr-scalar-field-hilbert-stress-energy
kind: lemma
title: "The Hilbert stress-energy tensor of the scalar-field action on flat spacetime"
status: published
origin: pipeline
domain: mathematics
deps: [lem-sr-scalar-field-euler-lagrange, lem-sr-compact-variation-and-fundamental-lemma, def-sr-stress-energy-tensor-and-force-density, def-ck-tensor-field-on-minkowski-space, def-sr-affine-minkowski-model, def-lorentz-form-and-inertia, def-determinant-of-a-square-matrix, thm-leibniz-determinant-is-alternating-multilinear-and-normalized, cor-determinant-of-an-inverse, cor-inverse-matrix-by-adjugate, thm-adjugate-identity-over-a-commutative-ring, def-matrix-minors-cofactors-and-adjugate, thm-ring-matrix-arithmetic-laws, thm-chain-rule-for-total-derivatives, thm-algebra-of-derivatives, lem-algebra-of-continuous-real-maps-on-a-space, def-continuous-map-top, thm-continuity-characterisations-top, def-rational-power, thm-real-power-continuity-and-derivatives, def-directional-and-partial-derivatives, thm-total-derivative-computes-directional-and-partial-derivatives]
dependency_roles:
  lem-sr-scalar-field-euler-lagrange: mathematical-premise
  lem-sr-compact-variation-and-fundamental-lemma: mathematical-premise
  def-sr-stress-energy-tensor-and-force-density: mathematical-premise
  def-ck-tensor-field-on-minkowski-space: mathematical-premise
  def-sr-affine-minkowski-model: mathematical-premise
  def-lorentz-form-and-inertia: mathematical-premise
  def-determinant-of-a-square-matrix: mathematical-premise
  thm-leibniz-determinant-is-alternating-multilinear-and-normalized: mathematical-premise
  cor-determinant-of-an-inverse: mathematical-premise
  cor-inverse-matrix-by-adjugate: mathematical-premise
  thm-adjugate-identity-over-a-commutative-ring: mathematical-premise
  def-matrix-minors-cofactors-and-adjugate: mathematical-premise
  thm-ring-matrix-arithmetic-laws: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  lem-algebra-of-continuous-real-maps-on-a-space: mathematical-premise
  def-continuous-map-top: mathematical-premise
  thm-continuity-characterisations-top: mathematical-premise
  def-rational-power: mathematical-premise
  thm-real-power-continuity-and-derivatives: mathematical-premise
  def-directional-and-partial-derivatives: mathematical-premise
  thm-total-derivative-computes-directional-and-partial-derivatives: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "D. Tong, General Relativity, University of Cambridge Part III Mathematical Tripos (Michaelmas Term 2019); c = 1 formulas converted to x^0 = c t; 4.5.1-4.5.5 printed pp. 181-191: scalar-field action (4.42)-(4.43) and equation of motion, Hilbert energy-momentum tensor (4.46), diffeomorphism invariance and conservation (4.50), flat-space Noether form, scalar tensor (4.51), Maxwell tensor (4.52), perfect fluid (4.53) with conservation equations (4.54)-(4.55), and the flat-space conserved-charge box argument of 4.5.5"
      url: "https://davidtong.org/pdfs/teaching/general-relativity/gr.pdf"
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Chapter 1 printed pp. 28-30 (energy-momentum tensor, dust T^{mu nu}=rho U^mu U^nu (1.106), perfect fluid (1.107)-(1.110), scalar and Maxwell tensors (1.111)-(1.112), conservation (1.113) with the remark that the proof follows from each matter model's equations of motion) and Chapter 5 printed pp. 138-139 (on-shell conservation from diffeomorphism invariance with compact-support variations, (5.34)-(5.38))"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "B. Crowell, Special Relativity, revision 2020-12-10 (author-published undergraduate textbook, 246 PDF pages); signature (+---) converted to (-+++) and c = 1 formulas converted to x^0 = c t; Chapter 9 pp. 179-197: 9.1 pp. 179-182 (current vector, flux, charge conservation), 9.2 pp. 183-191 (stress-energy tensor, conservation and flux, symmetry, dust, rank-2 transformation law, pressure, perfect fluid, worked examples, energy conditions), 9.3 pp. 192-197 (Gauss's theorem, integral conservation laws, the energy-momentum vector, angular momentum); the printed 9.2.8 dominant energy condition p. 191 has the defective |P| > rho and is not used"
      url: "https://archive.org/download/sr_20220102/sr.pdf"
---

## Statement

Let $\Omega\subseteq A$ be any nonempty open set with inertial chart $x$, let $c,K>0$ be numerical constants, and let $V:\mathbb R\to\mathbb R$ and $\varphi:\Omega\to\mathbb R$ be smooth. For each smooth symmetric $(0,2)$ tensor $h$ with compact support, set $g_{ab}(s)=\eta_{ab}+s h_{ab}$. Choose $s_0>0$ so that these matrices are nondegenerate with negative determinant for $|s|<s_0$; outside $\operatorname{supp}h$ they equal $\eta$. Put $D_h(s,x):=[\tfrac12 g^{ab}(s,x)\partial_a\varphi(x)\partial_b\varphi(x)+V(\varphi(x))]\sqrt{-\det g(s,x)}$ and define the relative action $$\mathcal A_h(s):=-\frac Kc\int_\Omega[D_h(s,x)-D_h(0,x)]\,d^4x.$$ This is the integral of a compactly supported density difference, without assuming either background density has a finite integral. (a) $\mathcal A_h$ is differentiable at $0$ and $$\mathcal A_h\prime(0)=\frac1{2c}\int_\Omega T^{ab}h_{ab}\,d^4x,\qquad T^{ab}:=K[\partial^a\varphi\partial^b\varphi-\eta^{ab}(\tfrac12\partial_d\varphi\partial^d\varphi+V(\varphi))],$$ with indices raised by $\eta$. (b) $T$ is smooth and symmetric, and is the unique continuous symmetric $(2,0)$ field for which $\int_\Omega T^{ab}h_{ab}\,d^4x=2c\mathcal A_h\prime(0)$ for every such $h$. It is called the Hilbert stress-energy tensor of this scalar-field density. (c) The result holds on unrestricted open $\Omega$, uses only compactly supported metric variations, and imposes no convergence or boundary condition at infinity. If the full background action happens to exist, the relative action is its variation difference and gives the same derivative. No choice principle is used.

## Facts & Assumptions

**Given:** The affine Minkowski model $(A,V,\eta,C^+)$ with a fixed inertial chart $x$ and coordinate partial derivatives $\partial_a$ ([[def-sr-affine-minkowski-model]], [[def-lorentz-form-and-inertia]], [[def-directional-and-partial-derivatives]]), a nonempty open $\Omega\subseteq A$, constants $c,K>0$, smooth $V:\mathbb R\to\mathbb R$ and smooth $\varphi:\Omega\to\mathbb R$ ([[def-ck-tensor-field-on-minkowski-space]]). In the chart the metric is the constant matrix $\eta=\operatorname{diag}(-1,1,1,1)$ with inverse $\eta^{ab}=\eta^{ba}=\operatorname{diag}(-1,1,1,1)$ and $\det\eta=-1$; for a smooth symmetric $(0,2)$ field $h$ with compact support we write $h^{ab}:=\eta^{ac}\eta^{bd}h_{cd}$ and raise index pairs of $\partial_a\varphi$ by $\eta$, so $\partial^a\varphi=\eta^{ab}\partial_b\varphi$ and $\partial^a\varphi\partial^b\varphi\,h_{ab}=h^{ab}\partial_a\varphi\partial_b\varphi$.

[F1] Compactly supported differentiation under the integral sign: if $F:(-s_0,s_0)\times\Omega\to\mathbb R$ is continuous with continuous $\partial_sF$ and there is a compact $K\Subset\Omega$ with $F(s,z)=0$ for $z\notin K$ and all $s$, then $s\mapsto\int_\Omega F(s,z)\,d^4z$ is $C^1$ on $(-s_0,s_0)$ with derivative $\int_\Omega\partial_sF(s,z)\,d^4z$. ([[lem-sr-compact-variation-and-fundamental-lemma]]\,(c))

[F2] Fundamental lemma: if $g:\Omega\to\mathbb R$ is continuous and $\int_\Omega g\psi\,d^4x=0$ for every smooth compactly supported $\psi:\Omega\to\mathbb R$, then $g=0$ on $\Omega$. ([[lem-sr-compact-variation-and-fundamental-lemma]]\,(a))

[F3] The Leibniz determinant is column-multilinear, alternating and normalized; in particular $\det(\eta)=-1$ and, with $A$ invertible, $\det(A^{-1})=\det(A)^{-1}$. ([[thm-leibniz-determinant-is-alternating-multilinear-and-normalized]], [[cor-determinant-of-an-inverse]])

[F4] Adjugate identity and Cramer's rule: $A\operatorname{adj}(A)=\operatorname{adj}(A)A=\det(A)I_n$, and if $\det(A)$ is a unit then $A^{-1}=\det(A)^{-1}\operatorname{adj}(A)$; the adjugate is the transpose of the cofactor matrix and its entries are the cofactors of $A$. ([[thm-adjugate-identity-over-a-commutative-ring]], [[cor-inverse-matrix-by-adjugate]], [[def-matrix-minors-cofactors-and-adjugate]])

[F5] Real one-variable derivative rules: sum, scalar multiple and product rules; and for $\alpha\in\mathbb R$ the function $x\mapsto x^\alpha$ is continuous and differentiable on $(0,\infty)$ with derivative $\alpha x^{\alpha-1}$. ([[thm-algebra-of-derivatives]], [[def-rational-power]], [[thm-real-power-continuity-and-derivatives]])

[F6] Chain rule for total derivatives. ([[thm-chain-rule-for-total-derivatives]])

[F7] Sums, scalar multiples, products and, where the denominator is nowhere zero, quotients of continuous real-valued maps on a topological space are continuous; hence every finite polynomial expression in continuous real-valued maps is continuous. A composite of continuous maps is continuous, and pulling a continuous real-valued function back along the coordinate projection $(s,x)\mapsto x$ preserves continuity; both assertions follow immediately from the definition of continuity through preimages of open sets and from the descriptions of the product and subspace topologies. Consequently the maps $(s,x)\mapsto\det g(s,x)$, $(s,x)\mapsto\operatorname{adj}(g(s,x))^{ab}$ and $(s,x)\mapsto g^{ab}(s,x)$, being finite polynomial expressions in the continuous entries $g_{ab}(s,x)=\eta_{ab}+s\,h_{ab}(x)$ with the nowhere-zero denominator $\det g$, are continuous on $(-s_0,s_0)\times\Omega$, and with the continuous $\sqrt{\cdot}: (0,\infty)\to\mathbb R$ the function $D_h$ of step 1.1 is continuous there. ([[lem-algebra-of-continuous-real-maps-on-a-space]], [[def-continuous-map-top]], [[thm-continuity-characterisations-top]])

[F8] Matrix addition, scalar multiplication, products and transposes obey the usual associative, distributive and identity laws. ([[thm-ring-matrix-arithmetic-laws]])

## Proof

**Proof technique:** direct.

1.1 Fix a smooth symmetric compactly supported $(0,2)$ field $h$ and set $g_{ab}(s,x):=\eta_{ab}+s\,h_{ab}(x)$ for $s\in\mathbb R$, $x\in\Omega$. Since $h_{ab}=0$ off $\operatorname{supp}h$, one has $g(s,x)=\eta$ off $\operatorname{supp}h$. The function $(s,x)\mapsto\det g(s,x)$ is, by [F3], a polynomial in $s$ with coefficients continuous in $x$ and equals $-1$ at $s=0$; for each $x$ continuity in $(s,x')$ at $(0,x)$ yields $\varepsilon(x)>0$ and a neighbourhood $U(x)$ of $x$ with $\det g(s,x')<0$ for $|s|<\varepsilon(x)$, $x'\in U(x)$, and compactness of $\operatorname{supp}h$ gives finitely many such sets and a common $s_0>0$ with $\det g(s,x)<0$ for all $|s|<s_0$, $x\in\Omega$. Hence for $|s|<s_0$ the matrix $g(s,x)$ is invertible, its inverse entries are $g^{ab}(s,x)=\det(g(s,x))^{-1}\operatorname{adj}(g(s,x))^{ab}$ by [F4], and $D_h(s,x):=[\tfrac12g^{ab}(s,x)\partial_a\varphi\partial_b\varphi+V(\varphi)]\sqrt{-\det g(s,x)}$ is defined; the maps $(s,x)\mapsto g^{ab}(s,x)$ and $(s,x)\mapsto\det g(s,x)$, being polynomials in the continuous entries and quotients with nowhere-vanishing denominator $\det g$, are continuous on $(-s_0,s_0)\times\Omega$ by [F7], and so are $\sqrt{-\det g(s,x)}$ by [F5] and $D_h(s,x)$ by [F7], and $D_h(s,x)=D_h(0,x)$ whenever $h_{ab}(x)=0$, in particular off $\operatorname{supp}h$. [given, F3, F4, F7]

1.2 Derivative identities at $s=0$. (i) Differentiating the components of the identity $g(s,x)g(s,x)^{-1}=I$ with respect to $s$ at $s=0$ by [F5] and [F8], and using $g_{ab}(0)=\eta_{ab}$, $g^{ab}(0)=\eta^{ab}$ and $\eta_{ac}\eta^{cb}=\delta_a^b$, gives $\partial_sg^{ab}(0,x)=-h^{ab}(x)$, where $h^{ab}:=\eta^{ac}\eta^{bd}h_{cd}$. (ii) Column multilinearity [F3] expands $\det(\eta+sh)=\det\eta+s\,\Sigma+s^2(\cdots)$ with $\Sigma:=\sum_j\det(\eta\text{ with its }j\text{-th column replaced by the }j\text{-th column of }h)$; expanding each such determinant along the replaced column shows $\Sigma=\sum_{i,j}h_{ij}C_{ij}(\eta)=\operatorname{tr}(\operatorname{adj}(\eta)h)$, and by [F4] $\operatorname{adj}(\eta)=\det(\eta)\eta^{-1}=-\eta^{-1}$, so $\Sigma=-\operatorname{tr}(\eta^{-1}h)=-\eta^{ab}h_{ab}$, because $\operatorname{tr}(\eta^{-1}h)=\eta^{ac}h_{ca}=\eta^{ab}h_{ab}$ by symmetry. (iii) Hence $\frac{d}{ds}\det g(0,x)=-\eta^{ab}h_{ab}(x)$, and since $-\det g(0,x)=1$ the chain rule [F6] with the power rule [F5] gives $\frac{d}{ds}\sqrt{-\det g(s,x)}\big|_{s=0}=\frac{1}{2}\eta^{ab}h_{ab}(x)$. [given, F3, F4, F5, F6, F8]

1.3 The field $T^{ab}:=K[\partial^a\varphi\partial^b\varphi-\eta^{ab}(\tfrac12\partial_d\varphi\partial^d\varphi+V(\varphi))]$ is smooth on $\Omega$ by iterating the product and chain rules [F5], [F6], because $\varphi$ and $V$ are smooth, $V(\varphi)$ is a smooth composition, and $\eta^{ab}$ is constant; it is symmetric, because $\eta^{ab}=\eta^{ba}$ and $\partial^a\varphi\partial^b\varphi=\partial^b\varphi\partial^a\varphi$. [given, F5, F6]

2.1 Apply [F1] to $F(s,x):=-\tfrac Kc[D_h(s,x)-D_h(0,x)]$ on $(-s_0,s_0)\times\Omega$: step 1.1 shows that $F$ is continuous with the stated compact support in $x$ for every $s$, and $\partial_sF$ is continuous by the same arguments applied to the derivative of $D_h$; hence $\mathcal A_h$ is $C^1$ and $\mathcal A_h'(0)=-\tfrac Kc\int_\Omega\partial_sD_h(0,x)\,d^4x$. By the product and chain rules [F5], [F6] and step 1.2, $$\partial_sD_h(0,x)=-\tfrac12h^{ab}\partial_a\varphi\partial_b\varphi+\tfrac12\eta^{ab}h_{ab}\big(\tfrac12\partial_d\varphi\partial^d\varphi+V(\varphi)\big).$$ Therefore $\mathcal A_h'(0)=\frac K{2c}\int_\Omega\big[h^{ab}\partial_a\varphi\partial_b\varphi-\eta^{ab}h_{ab}(\tfrac12\partial_d\varphi\partial^d\varphi+V(\varphi))\big]d^4x=\frac1{2c}\int_\Omega T^{ab}h_{ab}\,d^4x$, since $h^{ab}\partial_a\varphi\partial_b\varphi=\partial^a\varphi\partial^b\varphi\,h_{ab}$. [F1, F5, F6, step 1.1, step 1.2, step 1.3]

3.1 Uniqueness in (b). Let $Q$ be a continuous symmetric $(2,0)$ field with $\int_\Omega Q^{ab}h_{ab}\,d^4x=0$ for every smooth symmetric compactly supported $h$. Fix index pairs and a smooth compactly supported $\psi$: for $a=b$ take $h_{aa}:=\psi$; for $a\ne b$ take $h_{ab}:=h_{ba}:=\psi$ and all other components zero. In the first case $\int_\Omega Q^{aa}\psi\,d^4x=0$, in the second $\int_\Omega 2Q^{ab}\psi\,d^4x=0$ by symmetry of $Q$; in both cases the continuous function $Q^{ab}$ pairs to zero against every smooth compactly supported $\psi$, so $Q^{ab}=0$ on $\Omega$ by [F2]. All sixteen components vanish, hence $Q=0$. Applying this to the difference of two continuous symmetric fields with the same pairing against every $h$ shows that the field $T$ of steps 1.3 and 2.1 is the unique such field satisfying $\int_\Omega T^{ab}h_{ab}\,d^4x=2c\,\mathcal A_h'(0)$. [F2, step 1.3, step 2.1]

4.1 Claim (a) is step 2.1, claim (b) is steps 1.3, 2.1 and 3.1, and claim (c) is a statement about the hypotheses used: the argument allows any nonempty open $\Omega$, integrates only the compactly supported density difference $D_h(s,\cdot)-D_h(0,\cdot)$ (identically zero off $\operatorname{supp}h$), requires no convergence of $D_h(0,\cdot)$ on $\Omega$ and invokes no boundary condition; if the background action $\int_\Omega D_h(0,x)\,d^4x$ converges, $\mathcal A_h$ is the difference of the two actions and yields the same derivative. Every choice made is finite; no choice principle is used. [step 1.3, step 2.1, step 3.1] ∎
