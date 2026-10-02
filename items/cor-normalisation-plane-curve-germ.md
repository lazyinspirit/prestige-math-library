---
id: cor-normalisation-plane-curve-germ
kind: corollary
title: "Puiseux discs normalise a reduced plane curve germ"
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - def-complex-analytic-hypersurface-germ-and-reduced-equation
  - def-field-of-fractions
  - def-integral-element-and-algebraic-integer
  - def-irreducible-hypersurface-germ
  - def-total-quotient-ring-and-normalisation-of-reduced-plane-curve-germ
  - def-valuation-ring
  - def-weierstrass-polynomial
  - lem-gauss-lemma-over-a-ufd
  - lem-connected-cover-of-punctured-disc-for-irreducible-plane-curve
  - thm-complex-polynomial-has-exactly-degree-many-roots-counted-with-multiplicity
  - lem-generic-linear-coordinate-makes-a-holomorphic-germ-regular
  - lem-irreducible-holomorphic-germ-is-prime
  - lem-prepared-factorizations-and-irreducibility
  - lem-total-fractions-split-over-hypersurface-branches
  - lem-vanishing-ideal-of-a-reduced-hypersurface-germ
  - prop-units-in-the-holomorphic-germ-ring
  - thm-holomorphic-germ-ring-is-a-ufd
  - thm-holomorphic-inverse-function-theorem
  - thm-integrality-and-finite-module-equivalences
  - thm-local-irreducible-decomposition-hypersurface-germ
  - thm-power-series-expansion-in-several-complex-variables
  - thm-puiseux-parametrisation-plane-curve-germ
  - thm-valuation-ring-is-integrally-closed
  - thm-weierstrass-division-theorem
  - thm-weierstrass-preparation-theorem
  - thm-zero-order-factorization-holomorphic-function
justified_by: []
landmark: true
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Jiří Lebl, Tasty Bits of Several Complex Variables, Chapter 6 §§6.1–6.7"
      url: "https://www.jirka.org/scv/scv.pdf"
      locator: "Theorem 6.7.6 Puiseux parametrisation and Exercise 6.7.5 (pp. 195–196); Proposition 6.7.3 irreducible decomposition (p. 194); §6.6 defining ideals (p. 188)."
    - title: "Jean-Pierre Demailly, Complex Analytic and Differential Geometry, Chapter II §§2, 4 and 6"
      url: "https://www-fourier.univ-grenoble-alpes.fr/~demailly/manuscripts/agbook.pdf"
      locator: "Exercise 11.8 Puiseux expansions with exponent equal to the branch projection sheet number (p. 128); II (4.19) finite integral extension of the curve ring (p. 95); II (6.6) principal equation of a codimension-one germ (pp. 106–107)."
verification:
  audited: 2026-10-02
  precheck: pass
---

## Statement

Let $p\in\mathbb C^2$ and let $X$ be a reduced complex-analytic plane
curve germ at $p$, with reduced defining germ $f$ and branches
$X_1,\dots,X_r$ ($r\ge1$), so that $f=u\,q_1\cdots q_r$ with $u$ a unit and
pairwise nonassociate irreducible germs $q_i$, and $X_i=Z(q_i)$ are the
irreducible components of $X$
([[def-complex-analytic-hypersurface-germ-and-reduced-equation]],
[[def-irreducible-hypersurface-germ]],
[[thm-local-irreducible-decomposition-hypersurface-germ]]). Write

$$A:=\mathcal O_{\mathbb C^2,p}/I_p(X)=\mathcal O_{\mathbb C^2,p}/(f),\qquad A_i:=\mathcal O_{\mathbb C^2,p}/(q_i),\qquad K_i:=\operatorname{Frac}(A_i),$$

where the identification of $A$ with $\mathcal O/(f)$ is the principal
vanishing-ideal lemma, and let $Q(A)$ be the total quotient ring of $A$
([[lem-vanishing-ideal-of-a-reduced-hypersurface-germ]],
[[def-total-quotient-ring-and-normalisation-of-reduced-plane-curve-germ]],
[[def-field-of-fractions]]). The page's translation convention identifies the
germ ring at $p$ with the germ ring at the origin, and all constructions below
are transported along it.

For every branch the Puiseux theorem supplies an invertible complex-linear
change of coordinates of $\mathbb C^2$ and, in those coordinates, a disc
$\Delta_{\delta_i}$ about $0$, an integer $m_i\ge1$ and a holomorphic
$h_i(t)=\sum_{k>m_i}a_kt^k$ such that

$$\gamma_i(t)=(t^{m_i},h_i(t))\qquad(|t|<\delta_i)$$

is injective and its image is a full representative of the branch $X_i$; in
the same coordinates the defining germ of $X_i$ is a unit multiple of a
Weierstrass polynomial $W_i$ of degree $m_i$ in the second variable
([[thm-puiseux-parametrisation-plane-curve-germ]],
[[def-weierstrass-polynomial]]). Then:

1. **Finite embedding.** Taking the substitution $h\mapsto h\circ\gamma_i$ in
   branch $i$'s own coordinates and composing with the quotient maps
   $A\to A_i$ defines a ring homomorphism
   $$\Phi:A\longrightarrow\prod_{i=1}^{r}\mathbb C\{t_i\},\qquad \Phi(a)=\bigl(a\circ\gamma_1,\dots,a\circ\gamma_r\bigr),$$
   and $\Phi$ is injective; moreover $\prod_i\mathbb C\{t_i\}$ is a finitely
   generated $A$-module, so that $\Phi$ is a finite and integral extension.
2. **Birationality.** With $\mathbb C((t_i)):=\operatorname{Frac}(\mathbb C\{t_i\})$,
   the map induced by $\Phi$ on total quotient rings is an isomorphism
   $$Q(A)\;\longrightarrow\;\prod_{i=1}^{r}\mathbb C((t_i)).$$
3. **Normalisation.** Under this isomorphism, the normalisation of $A$, that
   is the integral closure of $A$ in $Q(A)$, corresponds exactly to
   $\prod_{i=1}^{r}\mathbb C\{t_i\}$
   ([[def-integral-element-and-algebraic-integer]],
   [[def-total-quotient-ring-and-normalisation-of-reduced-plane-curve-germ]]).
4. **Geometry.** After shrinking the finitely many discs, the punctured images
   $\gamma_i(\Delta_{\delta_i}\setminus\{0\})$ are pairwise disjoint and their
   union together with $p$ is a full representative of $X$; the discs separate
   the branches. Each $\gamma_i$ is a biholomorphism from
   $\Delta_{\delta_i}\setminus\{0\}$ onto its image with $p$ removed, and if
   $m_i=1$ it is a biholomorphism of the whole disc $\Delta_{\delta_i}$ onto
   its image.

## Facts & Assumptions

**Given:** A reduced plane curve germ $X$ at $p$, its reduced defining germ $f=u\,q_1\cdots q_r$, the rings $A$, $A_i$, $K_i$, $Q(A)$ and the fixed Puiseux data $(W_i,\gamma_i,\delta_i,m_i,h_i)$ of the Statement.

[F1] $X=\bigcup_iZ(q_i)$, the $Z(q_i)$ are exactly the irreducible components of $X$, and they are pairwise distinct; the $q_i$ are pairwise nonassociate irreducibles in the unique factorisation domain $\mathcal O_{\mathbb C^2,p}$ ([[thm-local-irreducible-decomposition-hypersurface-germ]], [[def-irreducible-hypersurface-germ]], [[thm-holomorphic-germ-ring-is-a-ufd]]).

[F2] Every irreducible germ is prime, so each $A_i=\mathcal O/(q_i)$ is a domain and $K_i=\operatorname{Frac}(A_i)$ is defined ([[lem-irreducible-holomorphic-germ-is-prime]], [[def-field-of-fractions]]).

[F3] For each $i$ the substitution $\sigma_i(h):=h\circ\gamma_i$ is a well-defined ring homomorphism $\mathcal O_{\mathbb C^2,p}\to\mathbb C\{t\}$; it annihilates $q_i$ because $\gamma_i$ takes values in $Z(q_i)$, hence factors through $\bar\sigma_i:A_i\to\mathbb C\{t\}$ ([[thm-puiseux-parametrisation-plane-curve-germ]]).

[F4] The vanishing ideal of the branch is principal: $I_p(Z(q_i))=(q_i)$, where a germ lies in $I_p(Z(q_i))$ when a representative vanishes on a full representative of $Z(q_i)$ ([[lem-vanishing-ideal-of-a-reduced-hypersurface-germ]]).

[F5] Weierstrass division in two variables: for a Weierstrass polynomial $W$ of degree $d$ in $y$ over $\mathbb C\{x\}$, every class in $\mathbb C\{x,y\}/(W)$ has a unique representative $r_0+r_1y+\cdots+r_{d-1}y^{d-1}$ with $r_j\in\mathbb C\{x\}$ ([[thm-weierstrass-division-theorem]], [[def-weierstrass-polynomial]]). In particular $\mathbb C\{x,y\}/(W)$ is a free $\mathbb C\{x\}$-module with basis the classes of $1,y,\dots,y^{d-1}$.

[F6] If $G$ is monic and irreducible in $R[y]$ for a unique factorisation domain $R$ with fraction field $L$, then $G$ is irreducible in $L[y]$ ([[lem-gauss-lemma-over-a-ufd]], [[thm-holomorphic-germ-ring-is-a-ufd]]).

[F7] For each branch, $W_i$ is irreducible in $\mathbb C\{x\}[y]$: $q_i$ is irreducible in $\mathcal O_{\mathbb C^2,p}=\mathbb C\{x,y\}$ and equal to a unit multiple of $W_i$, and an element is irreducible exactly when its preparation is ([[lem-prepared-factorizations-and-irreducibility]], [[prop-units-in-the-holomorphic-germ-ring]], [[thm-weierstrass-preparation-theorem]]).

[F8] If $B$ is a ring extension of $R'$ and $B$ is finitely generated as an $R'$-module, then $B$ is integral over $R'$: for $b\in B$ the ring $B$ is a faithful $R'[b]$-module, finitely generated over $R'$ ([[thm-integrality-and-finite-module-equivalences]]).

[F9] Total fractions split over the branches: there is a ring isomorphism $Q(A)\to\prod_iK_i$ whose restriction to $A$ is induced by the quotient maps $A\to A_i$ ([[lem-total-fractions-split-over-hypersurface-branches]], [[def-total-quotient-ring-and-normalisation-of-reduced-plane-curve-germ]]).

[F10] $\mathbb C\{t\}$ is a valuation ring of its fraction field: for every nonzero $x\in\operatorname{Frac}(\mathbb C\{t\})$ at least one of $x$ and $x^{-1}$ lies in $\mathbb C\{t\}$. Indeed $x=g/t^N$ with $g\in\mathbb C\{t\}$, and the zero-order factorisation $g=t^ku$ with $u$ a unit of $\mathbb C\{t\}$ gives $x=t^{k-N}u$ ([[thm-zero-order-factorization-holomorphic-function]], [[prop-units-in-the-holomorphic-germ-ring]], [[def-valuation-ring]]). Consequently $\mathbb C\{t\}$ is integrally closed in $\operatorname{Frac}(\mathbb C\{t\})$ ([[thm-valuation-ring-is-integrally-closed]]).

[F11] A monic equation over a subring $R'\subseteq\prod_iB_i$ gives a monic equation for each component over the corresponding image of $R'$ ([[def-integral-element-and-algebraic-integer]]). This componentwise implication is all that is needed below.

[F12] Every nonzero holomorphic function of one variable has isolated zeros: a function vanishing at $0$ and not identically zero equals $t^ku$ there with $k\ge1$, hence is nonzero on some punctured disc ([[thm-zero-order-factorization-holomorphic-function]]).

[F13] Power-series expansions are unique ([[thm-power-series-expansion-in-several-complex-variables]]).

[F14] A holomorphic map with nowhere vanishing derivative is locally biholomorphic, and a bijective local biholomorphism onto its image is a biholomorphism onto that image ([[thm-holomorphic-inverse-function-theorem]]).

[F15] For a reduced irreducible Weierstrass polynomial of degree $d$, over a sufficiently small punctured $x$-disc there are exactly $d$ distinct roots in each fibre and all roots tend to $0$ as $x\to0$ ([[lem-connected-cover-of-punctured-disc-for-irreducible-plane-curve]]). The polynomial $t^m-x$ has exactly $m$ distinct roots for $x\ne0$ ([[thm-complex-polynomial-has-exactly-degree-many-roots-counted-with-multiplicity]]).

**Proof technique:** direct — substitute each branch parametrisation, prove the substitution is injective by the principal vanishing-ideal lemma, compare degrees after preparation, identify the fraction fields and use that the power-series ring is an integrally closed valuation ring.

## Proof

1.1 Fix for each branch the coordinates and injective map $\gamma_i(t)=(t^{m_i},h_i(t))$ supplied by the Puiseux theorem. In these coordinates $q_i(0,y)$ is not identically zero: otherwise its zero set would contain a vertical disc, whereas the image representative of $\gamma_i$ has only $(0,0)$ over $x=0$. Preparation therefore gives $q_i=v_iW_i$ with $W_i$ of some degree $d_i\ge1$ in $y$. It is reduced and irreducible because it is associate to $q_i$. Apply [F15] to $W_i$. For all sufficiently small $x\ne0$, all its $d_i$ roots lie in the neighbourhood where the branch agrees with the image representative of $\gamma_i$. Each such root is attained at a parameter satisfying $t^{m_i}=x$, so there are at most $m_i$ roots. Conversely all $m_i$ solutions of $t^{m_i}=x$ lie in the parameter disc when $x$ is small and their images lie in that same neighbourhood; they give $m_i$ distinct roots by injectivity. Thus $d_i=m_i$. Substitution sends $x$ to $t^{m_i}$ and $y$ to $h_i(t)$, and is defined on convergent germs by composition. [given, F3, F15, choose, algebra]

1.2 Each parametrisation is injective by the Puiseux theorem, and $\gamma_i'(t)=(m_it^{m_i-1},h_i'(t))$ is nonzero for $t\ne0$ because its first component is. At such a point the first coordinate $t\mapsto t^{m_i}$ has nonzero derivative, so its local inverse is holomorphic and the inverse of $\gamma_i$ on its image is the composition of that local inverse with the first-coordinate projection; by [F14] the injective parametrisation is therefore a biholomorphism from $\Delta_{\delta_i}\setminus\{0\}$ onto its image with $p$ removed. If $m_i=1$ the first component is the identity, so $h_i$ is defined on the whole disc and $\gamma_i$ is a biholomorphism of $\Delta_{\delta_i}$ onto its image. [F14, F13, algebra]

2.1 For each $i$ the substitution $\sigma_i$ annihilates $q_i$, so it factors through $\bar\sigma_i:A_i\to\mathbb C\{t\}$ by [F3]. This factor is injective: if $\bar\sigma_i(h)=0$ for a class $h$, then a representative of $h$ vanishes at every point of the full representative $\gamma_i(\Delta_{\delta_i})$ of $Z(q_i)$; hence $h\in I_p(Z(q_i))=(q_i)$ by [F4], so $h=0$ in $A_i$. [step 1.1, F3, F4]

2.2 By [F5] applied to $W_i$, the branch ring $A_i$ is a free $\mathbb C\{x\}$-module with basis the classes of $1,y,\dots,y^{m_i-1}$; write $\bar y$ for the class of $y$. By [F7] $W_i$ is irreducible in $\mathbb C\{x\}[y]$ and it is monic, hence primitive, so by [F6] it is irreducible in $L_i[y]$ for $L_i:=\operatorname{Frac}(\mathbb C\{x\})$. Since $W_i(\bar y)=0$ and $W_i$ is monic of degree $m_i$ and irreducible over $L_i$, it is the minimal polynomial of $\bar y$ over $L_i$. [step 1.1, F5, F6, F7]

2.3 Under $\bar\sigma_i$ the class of $x$ goes to $t^{m_i}$, so the image of $L_i=\operatorname{Frac}(\mathbb C\{x\})$ is the subfield $\mathbb C((t_i^{m_i})):=\operatorname{Frac}(\mathbb C\{t_i^{m_i}\})$ of $\mathbb C((t_i))$ consisting of convergent Laurent germs in $t_i^{m_i}$. We claim $[\mathbb C((t_i)):\mathbb C((t_i^{m_i}))]=m_i$: every element of $\mathbb C((t_i))$ is $g/t^N$ with $g\in\mathbb C\{t\}$, and splitting the exponents of the expansion of $g$ by their residue modulo $m_i$ writes it as $\sum_{j<m_i}t^j f_j(t^{m_i})$ with $f_j\in\operatorname{Frac}(\mathbb C\{t^{m_i}\})$; each grouped series converges for $|t^{m_i}|$ sufficiently small by absolute convergence of the original series. Thus the $m_i$ elements $1,t,\dots,t^{m_i-1}$ span, and they are linearly independent because $t$-expansions are unique and terms of distinct residues modulo $m_i$ cannot cancel [F13]. [step 1.1, F13, algebra]

2.4 For $i\ne j$ the function $q_j\circ\gamma_i$ is holomorphic on $\Delta_{\delta_i}$ and vanishes at $0$ because $\gamma_i(0)=p\in Z(q_j)$. It is not identically zero: otherwise the representative $q_j$ would vanish on the full representative $\gamma_i(\Delta_{\delta_i})$ of $Z(q_i)$, so $q_j\in I_p(Z(q_i))=(q_i)$ by [F4], making the irreducible germs $q_j$ and $q_i$ associate and contradicting [F1]. By [F12] the zeros of $q_j\circ\gamma_i$ are isolated, so after shrinking $\delta_i$ we may assume $q_j\circ\gamma_i$ has no zero in the punctured disc; then $\gamma_i(\Delta_{\delta_i}\setminus\{0\})$ is disjoint from $Z(q_j)$, hence from $\gamma_j(\Delta_{\delta_j}\setminus\{0\})$. Doing this for the finitely many ordered pairs and shrinking once more so that every $Z(q_i)$ agrees near $p$ with $\gamma_i(\Delta_{\delta_i})$ and $X$ agrees with $\bigcup_iZ(q_i)$, the punctured images are pairwise disjoint and their union with $p$ is a full representative of $X$. [step 1.1, F1, F4, F12]

3.1 The quotient maps $A\to A_i$, $a\mapsto a+(q_i)$, are well defined because $f=u\,q_1\cdots q_r\in(q_i)$, and composing with the injections $\bar\sigma_i$ gives $\Phi_i:A\to\mathbb C\{t_i\}$ and $\Phi=(\Phi_1,\dots,\Phi_r):A\to\prod_i\mathbb C\{t_i\}$. If $\Phi(a)=0$, then $a\in(q_i)$ for every $i$. Since the $q_i$ are pairwise nonassociate irreducibles in the unique factorisation domain $\mathcal O_{\mathbb C^2,p}$ [F1], each $q_i$ divides $a$ and the pairwise coprime factors $q_i$ have product dividing $a$; hence $q_1\cdots q_r$, which is associate to $f$, divides $a$ and $a=0$ in $A$. Thus $\Phi$ is injective. [step 2.1, F1, algebra]

3.2 Every element of $K_i=\operatorname{Frac}(A_i)$ lies in $L_i\cdot A_i$, so $K_i$ is generated as an $L_i$-vector space by $1,\bar y,\dots,\bar y^{m_i-1}$ and $[K_i:L_i]\le m_i$; indeed for $0\ne b\in A_i$ the $L_i$-linear map $x\mapsto bx$ on the finite-dimensional $L_i$-space $L_i\cdot A_i$ is injective (a domain), hence bijective, so $b$ is invertible in $L_i\cdot A_i$. On the other hand $\bar y$ has degree $m_i$ over $L_i$ by step 2.2, so $[K_i:L_i]\ge m_i$ and therefore $[K_i:L_i]=m_i$ and $K_i=L_i[\bar y]$. [step 2.2, F2, F5, algebra]

3.3 $\prod_i\mathbb C\{t_i\}$ is a finitely generated $A$-module. Indeed, splitting by residue modulo $m_i$ gives $\mathbb C\{t_i\}=\sum_{j<m_i}\mathbb C\{t_i^{m_i}\}t_i^j$, and $\mathbb C\{t_i^{m_i}\}=\bar\sigma_i(\mathbb C\{x\})$ is contained in $\Phi_i(A)$ because $\sigma_i(x)=t_i^{m_i}$; hence the $m_i$ elements $1,t_i,\dots,t_i^{m_i-1}$ generate $\mathbb C\{t_i\}$ over $\Phi_i(A)$, and $\Phi_i(A)$ is a quotient of $A$. Placing these finitely many generators in their respective coordinates and zero in the other coordinates generates the finite product over $A$. [step 1.1, step 2.1, F5, algebra]

4.1 The injection $\bar\sigma_i$ extends to an injective field homomorphism $K_i\to\mathbb C((t_i))$ whose image contains $\mathbb C((t_i^{m_i}))$ and has degree $[K_i:L_i]=m_i$ over it by steps 2.3 and 3.2. Since $[\mathbb C((t_i)):\mathbb C((t_i^{m_i}))]=m_i$, the image is all of $\mathbb C((t_i))$; thus $\bar\sigma_i$ induces an isomorphism $K_i\to\mathbb C((t_i))$. [step 2.3, step 3.2]

5.1 By [F9] there is an isomorphism $Q(A)\to\prod_iK_i$ restricting to the componentwise quotient maps on $A$; composing with the componentwise isomorphisms $K_i\to\mathbb C((t_i))$ of step 4.1 gives an isomorphism
$$\Psi:Q(A)\longrightarrow\prod_i\mathbb C((t_i))$$
whose restriction to $A$ is exactly $\Phi$. [step 3.1, step 4.1, F9]

6.1 $\prod_i\mathbb C\{t_i\}$ is integral over $\Phi(A)$: it is a finitely generated $\Phi(A)$-module by step 3.3, so [F8] applies with $R'=\Phi(A)\ne0$. Consequently, if $b\in Q(A)$ has $\Psi(b)\in\prod_i\mathbb C\{t_i\}$, then $\Psi(b)$ satisfies a monic equation with coefficients in $\Phi(A)$, and applying $\Psi^{-1}$ exhibits $b$ as integral over $A$. [step 3.3, step 5.1, F8]

6.2 Conversely, let $b\in Q(A)$ be integral over $A$ and write $\Psi(b)=(c_i)$. Applying $\Psi$ to a monic equation for $b$ over $A$ gives a monic equation for $(c_i)$ with coefficients in $\Phi(A)\subseteq\prod_i\mathbb C\{t_i\}$; by [F11] each component $c_i$ satisfies a monic equation over $\Phi_i(A)\subseteq\mathbb C\{t_i\}$ and is therefore integral over $\mathbb C\{t_i\}$, hence $c_i\in\mathbb C\{t_i\}$ because $\mathbb C\{t_i\}$ is integrally closed in $\mathbb C((t_i))$ [F10]. Therefore $\Psi(b)\in\prod_i\mathbb C\{t_i\}$. [step 5.1, F10, F11]

7.1 By steps 6.1 and 6.2 the integral closure of $A$ in $Q(A)$ is $\Psi^{-1}\bigl(\prod_i\mathbb C\{t_i\}\bigr)$; identifying $Q(A)$ with $\prod_i\mathbb C((t_i))$ along the isomorphism $\Psi$, the normalisation of $A$ is exactly $\prod_i\mathbb C\{t_i\}$. This proves the finite, integral, birational and normalisation assertions. [step 3.1, step 3.3, step 6.1, step 6.2]

8.1 Steps 3.1, 3.3, 5.1 and 7.1 give the finite birational integral embedding and the identification of the normalisation with $\prod_i\mathbb C\{t_i\}$; steps 1.2 and 2.4 give the separation of the branches and the local biholomorphism statement. ∎
