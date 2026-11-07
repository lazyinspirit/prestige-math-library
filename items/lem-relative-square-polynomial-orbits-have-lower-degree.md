---
dependency_level: 8
id: lem-relative-square-polynomial-orbits-have-lower-degree
kind: lemma
title: Relative-square polynomial orbits have lower degree
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - lem-filtered-polynomial-sequences-form-a-group-and-have-weighted-coordinates
  - lem-rational-subgroups-have-quantitatively-adapted-malcev-bases
  - lem-quantitative-malcev-metric-and-subgroup-comparisons
  - lem-vertical-fourier-and-bracket-polynomial-reductions
  - lem-finite-nilpotent-exponential-and-bch-calculus
  - lem-quantitative-malcev-polynomial-coordinate-calculus
  - def-polynomial-sequence-on-a-filtered-group
  - def-malcev-basis-and-rationality
  - def-total-equidistribution-of-a-nil-orbit
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Ben Green and Terence Tao, The quantitative behaviour of polynomial orbits on nilmanifolds
      url: https://annals.math.princeton.edu/wp-content/uploads/annals-v175-n2-p02-p.pdf
      locator: Proposition 7.2 and Lemmas 7.4–7.5, printed pp. 506–509
    - title: Ben Green and Terence Tao, On the quantitative distribution of polynomial nilsequences, erratum
      url: https://annals.math.princeton.edu/wp-content/uploads/annals-v179-n3-p08-p.pdf
      locator: Section 4, printed pp. 1182–1183
---

## Statement

Let $G/\Gamma$ be an $m$-dimensional nilmanifold with a filtration $G_\bullet$ of degree $d\geq1$ and a $Q$-rational adapted Mal’cev basis $X$, where $Q\geq2$. Put

$$H=\{(x,y)\in G^2:xy^{-1}\in G_2\},\qquad H_i=\{(x,y)\in G_i^2:xy^{-1}\in G_{i+1}\}\quad(i\geq1),\qquad H_0=H_1,$$

$$D=\{(z,z):z\in G_d\},\qquad \Lambda=H\cap\Gamma^2,\qquad \overline H=H/D,\qquad \overline\Lambda=\Lambda D/D.$$

Then $H_\bullet$ is a filtration of degree at most $d$, $H_d=D$ is central, and its image on $\overline H$ has degree at most $d-1$. The intersections with $\Gamma^2$ give lattices in the filtration groups. There is a $CQ^c$-rational Mal’cev basis $Y$ of $H/\Lambda$ adapted to $H_\bullet$, with coefficients of height at most $CQ^c$ in the product basis $X\times X$. Its truncation gives an adapted basis $\overline Y$ on $\overline H/\overline\Lambda$. On $H$, the coordinate map $\psi_Y(x,y)$ is a polynomial of degree at most $C$ with rational coefficient heights at most $CQ^c$ in $\psi_X(x),\psi_X(y)$; the coordinate inclusion in the opposite direction has the same kind of bounds. Constants $C,c$ depend only on $m,d$.

Let $g\in\operatorname{poly}(\mathbb Z,G_\bullet)$ with $g(0)=e$, set $b=g(1)$ and $f(n)=g(n)b^{-n}$, and choose for each integer $h$ the representative $a_h$ of $b^h\Gamma$ with coordinates in $[0,1)^m$. Then

$$g_h^\square(n)=\bigl(a_h^{-1}f(n+h)b^na_h,\ f(n)b^n\bigr)$$

belongs to $\operatorname{poly}(\mathbb Z,H_\bullet)$, and its projection to $\overline H$ has filtration degree at most $d-1$.

Let $F:G/\Gamma\to\mathbb C$ have Lipschitz norm at most one and vertical character $\xi:G_d\to\mathbb R/\mathbb Z$, meaning $F(zx)=e(\xi(z))F(x)$ and $\xi(G_d\cap\Gamma)=0$. The function

$$T_h((x,y)\Lambda)=F(a_hx\Gamma)\overline{F(y\Gamma)}$$

is $D$-invariant, descends to $\overline H/\overline\Lambda$, and has Lipschitz norm at most $CQ^c$ in both adapted metrics, uniformly in $h$. It evaluates on $g_h^\square(n)$ as $F(g(n+h)\Gamma)\overline{F(g(n)\Gamma)}$. If $d\geq2$ and $\xi\neq0$, its Haar integral is zero. Consequently, for any nonempty integer interval $I$, an average of this correlation of modulus at least $\rho>0$ implies that the projected orbit on $I$ fails $\rho/(2CQ^c)$-equidistribution. If $d=1$, then $H=D$ and $\overline H$ is a point; no zero-mean assertion is made in this case.

Every horizontal character $\eta:H\to\mathbb R/\mathbb Z$ of norm at most $K\geq1$ in $Y$ has a decomposition

$$\eta(x,y)=\eta_1(y)+\eta_2(xy^{-1}),$$

where $\eta_1$ is a horizontal character on $G$, $\eta_2$ is a horizontal character on $G_2$ annihilating $[G,G_2]$, and $|\eta_1|,|\eta_2|\leq CKQ^c$. The norm on $G_2$ uses the tail of $X$. If $\eta$ factors through $H/D$, then also $\eta_1(G_d)=0$.

## Statement references

[Green and Tao, Proposition 7.2 and Lemmas 7.4–7.5](https://annals.math.princeton.edu/wp-content/uploads/annals-v175-n2-p02-p.pdf)

[Green and Tao, erratum, Section 4](https://annals.math.princeton.edu/wp-content/uploads/annals-v179-n3-p08-p.pdf)

## Facts & Assumptions

**Given:** The filtered nilmanifold, rational adapted basis, polynomial orbit, vertical test and character under the respective hypotheses of the statement.

[F1] Polynomial maps for a finite prefiltration form a group and are preserved by integer shifts; a one-variable filtered polynomial has an ordered expansion $u_0u_1^{\binom n1}\cdots u_d^{\binom nd}$ with $u_i\in G_i$. [[lem-filtered-polynomial-sequences-form-a-group-and-have-weighted-coordinates]]

[F2] Rational Lie subgroups and rational filtrations have lattice intersections and adapted Mal’cev bases of bounded rational height. [[lem-rational-subgroups-have-quantitatively-adapted-malcev-bases]]

[F3] Subgroup quotient inclusions, bounded-coordinate left translations, adapted central quotients and invariant-function descent have polynomial Lipschitz bounds; invariant Haar probability pushes forward under central quotients. Bounded fundamental representatives exist. [[lem-quantitative-malcev-metric-and-subgroup-comparisons]]

[F4] Vertical characters and their Lipschitz test functions are those in the vertical Fourier reduction. [[lem-vertical-fourier-and-bracket-polynomial-reductions]]

[F5] The finite nilpotent exponential and BCH calculus identifies the connected rational Lie subgroups and their global coordinates. [[lem-finite-nilpotent-exponential-and-bch-calculus]]

[F6] Coordinate changes between rational nested bases, including subgroup restriction and inclusion, are polynomials of bounded degree and bounded rational coefficient height. [[lem-quantitative-malcev-polynomial-coordinate-calculus]]

[F7] Polynomiality means that every iterated right difference $\partial_hg(n)=g(n+h)g(n)^{-1}$ of order $j$ lies in the $j$th filtration group. [[def-polynomial-sequence-on-a-filtered-group]]

[F8] Adapted basis tails describe the filtration groups, their lattices and the norms of horizontal characters. [[def-malcev-basis-and-rationality]]

[F9] Equidistribution compares orbit averages with normalized Haar integrals using the full Lipschitz norm. [[def-total-equidistribution-of-a-nil-orbit]]

## Proof

**Proof technique:** direct.

1.1 Normality of $G_{i+1}$ in $G$ makes $H_i$ a subgroup. The map $(u,y)\mapsto(uy,y)$ is a diffeomorphism $G_{i+1}\times G_i\to H_i$, so $H_i$ is connected and simply connected. If $(x,y)\in H_i$ and $(v,w)\in H_j$, write $x=uy$ with $u\in G_{i+1}$ and $v=zw$ with $z\in G_{j+1}$. Modulo the normal subgroup $G_{i+j+1}$, commutator identities give $[uy,zw]=[y,w]$: the terms involving $u$ or $z$ vanish because $[G_{i+1},G_j],[G_i,G_{j+1}]\subseteq G_{i+j+1}$, and conjugating a term of $G_{i+j}$ changes it by an element of $G_{i+j+1}$. Both coordinate commutators lie in $G_{i+j}$ and their quotient lies in $G_{i+j+1}$. Thus each commutator of an element of $H_i$ with an element of $H_j$ belongs to $H_{i+j}$, proving $[H_i,H_j]\subseteq H_{i+j}$. This argument does not require the generally false assertion that the diagonal $G_i$ is normal in $H_i$. The order-zero filtration conditions follow from $H_0=H_1$ and the stronger positive-index conditions. Finally $H_d=D$, and $D$ is central, so quotienting by $D$ leaves degree at most $d-1$. [given, F5, F8, algebra]

2.1 By the polynomial group property, $f(n)=g(n)b^{-n}$ is polynomial. Modulo $G_2$ the group is abelian and the second differences of $g$ vanish. Since $g(0)=e$ and $g(1)=b$, the unit-difference recurrence gives $g(n)=b^n$ modulo $G_2$ for all positive and negative integers $n$. Thus $f$ takes values in $G_2$ and satisfies $f(0)=f(1)=e$. In its ordered expansion $f(n)=u_0u_1^{\binom n1}\cdots u_d^{\binom nd}$, evaluation at $0$ and $1$ gives $u_0=u_1=e$. In particular $f(n)=\prod_{i=2}^du_i^{\binom ni}$ with $u_i\in G_i$. [F1, F7, step 1.1, algebra]

2.2 In the product basis, the Lie algebra of $H_i$ is spanned by $(X_j,X_j)$ for the $G_i$ tail and $(X_j,0)$ for the $G_{i+1}$ tail. To verify the spanning description, subtract the second coordinate from the first; the defining difference lies in the latter tail. These spanning vectors have coefficients $0,1$. The product basis has rational structure constants bounded by $Q$, and the filtration just proved is rational with these bounded coefficients. Apply the rational-subgroup basis theorem to $H$ and to each $H_i$. It proves that their intersections with $\Gamma^2$ are lattices and supplies an adapted Mal’cev basis $Y$ of $H/\Lambda$ with coefficient heights at most $CQ^c$ in the product basis. The coordinate-calculus theorem then gives polynomial restriction $\psi_Y(x,y)=R(\psi_X(x),\psi_X(y))$ and polynomial inclusion in the opposite direction, each of degree at most $C$ with coefficient heights at most $CQ^c$. These are coefficient bounds, with no bound asserted on values at unbounded orbit coordinates. [F2, F5, F6, step 1.1, algebra]

2.3 Define $\eta_1(y)=\eta(y,y)$ and $\eta_2(u)=\eta(u,e)$ for $u\in G_2$. These are continuous homomorphisms. The factorization $(x,y)=(xy^{-1},e)(y,y)$ gives the asserted decomposition. The diagonal $\Gamma$ and $(G_2\cap\Gamma)\times\{e\}$ are contained in $\Lambda$, so $\eta_1$ and $\eta_2$ annihilate their respective lattices. Moreover $[(g,g),(u,e)]=([g,u],e)$; any homomorphism to $\mathbb R/\mathbb Z$ annihilates commutators, hence $\eta_2([G,G_2])=0$. If $\eta$ factors through $H/D$, then $\eta_1(z)=\eta(z,z)=0$ on $G_d$. None of these statements asserts annihilation of $[G,G]$ by $\eta_2$. [given, F8, step 1.1, algebra, construct]

3.1 For a fixed $i\geq2$, the map $v_i(n)=(u_i^{\binom{n+h}i},u_i^{\binom ni})$ is polynomial for $H_\bullet$. Indeed, after $j$ right differences its exponents are the corresponding $j$ finite differences of the binomial polynomials. If $1\leq j<i$, both coordinates and their quotient lie in $G_i\subseteq G_j$, and the quotient also lies in $G_i\subseteq G_{j+1}$. If $j=i$, both exponents equal the same constant, so the pair is diagonal in $G_i$. If $j>i$, both coordinates are the identity. At order zero the pair must belong to $H_0=H_1$, which requires its quotient to lie in $G_2$; this holds because $i\geq2$. The vanishing of $u_0,u_1$ in step 2.1 is essential for this order-zero assertion. Taking the ordered product of the $v_i$ and using the polynomial group property proves that $(f(n+h),f(n))$ is $H_\bullet$-polynomial. Also $(b^n,b^n)$ is polynomial, since its first differences are diagonal in $G$ and all higher differences are trivial. [F1, F7, step 2.1, algebra]

3.2 Since $D=H_d$ is the final central tail in $Y$, the central quotient theorem supplies a genuine lattice $\overline\Lambda$ and the truncated adapted basis $\overline Y$ on $\overline H/\overline\Lambda$. Its rationality has the same polynomial bound. For these adapted bases, projection is coordinate truncation and Haar probability pushes forward. An invariant function descends with no increase of Lipschitz norm; the polynomial comparison bound allows the same conclusion in any of the bounded rational bases used here. [F3, F8, step 2.2, algebra]

3.3 Write $\eta=k\cdot\psi_Y$ modulo integers, where $k$ is integral and $\|k\|_\infty\leq K$. For $X_j$ in $G$, substitute $(\exp(tX_j),\exp(tX_j))$ into the polynomial $R$ of step 2.2. For $X_j$ in the $G_2$ tail, also substitute $(\exp(tX_j),e)$. Each substitution gives a real polynomial lift $p_j(t)$ of the respective restricted character, with $p_j(0)=0$ and coefficients bounded by $CKQ^c$. A continuous additive circle character of $\mathbb R$ is $t\mapsto\lambda_jt$ modulo integers: lift locally around zero, where the homomorphism law becomes genuine additivity, obtain linearity first on rational multiples and then by continuity, and extend to all real $t$ by integer subdivision. Therefore $p_j(t)-\lambda_jt$ is a continuous integer-valued function vanishing at zero and is identically zero. It follows that $|\lambda_j|=|p_j'(0)|\leq CKQ^c$. Since $\exp(X_j)$ belongs to the relevant lattice, $\lambda_j$ is integral. Summing along the ordered Mal’cev factors identifies these integers with the coefficient vectors of $\eta_1$ and $\eta_2$, proving both character-norm bounds. This also justifies the coefficient comparison despite the original character identities being modulo integers. [F6, F8, step 2.2, step 2.3, algebra]

4.1 For $a\in G$, the automorphism $C_a(x,y)=(a^{-1}xa,y)$ preserves each $H_i$, because conjugating $x\in G_i$ changes it by an element of $[G,G_i]\subseteq G_{i+1}$. Its inverse is $C_{a^{-1}}$, so it preserves the filtration in both directions and commutes with taking right differences. Apply $C_{a_h}$ to the product $(f(n+h),f(n))(b^n,b^n)$. This gives exactly $g_h^\square(n)$ and proves its polynomiality. Projection to $H/D$ preserves all iterated differences, giving the asserted degree reduction. [F1, F7, step 1.1, step 3.1, algebra]

5.1 The formula for $T_h$ is independent of the right representative modulo $\Lambda$, since both lattice coordinates belong to $\Gamma$. The bounded fundamental representative $a_h$ satisfies $\|\psi_X(a_h)\|_\infty\leq1$. Subgroup inclusion followed by projection to either factor is $CQ^c$-Lipschitz, as is left translation by $a_h$ on $G/\Gamma$. Since $\|F\|_\infty\leq1$, the inequality $|u\overline v-u'\overline{v'}|\leq|u-u'|+|v-v'|$ for unit-bounded factors gives $\|T_h\|_{\mathrm{Lip}}\leq CQ^c$, uniformly in $h$. For $z\in G_d$, centrality and the vertical law give $T_h((z,z)(x,y))=e(\xi(z))e(-\xi(z))T_h(x,y)=T_h(x,y)$, proving $D$-invariance and the same polynomial Lipschitz bound on the quotient. Write $b^h=a_h\lambda_h$, $\lambda_h\in\Gamma$. Then $f(n+h)b^na_h=f(n+h)b^{n+h}\lambda_h^{-1}$, so substitution of $g_h^\square(n)$ into $T_h$ gives $F(g(n+h)\Gamma)\overline{F(g(n)\Gamma)}$ with the claimed right-coset order. [F3, F4, F9, step 4.1, step 3.2, algebra]

6.1 If $d\geq2$ and $\xi\neq0$, choose $z\in G_d$ with $e(\xi(z))\neq1$. Since $G_d\subseteq G_2$, the element $(z,e)$ lies in $H$; its left action multiplies $T_h$ by $e(\xi(z))$. Haar invariance forces $\int T_h=e(\xi(z))\int T_h$, so the integral is zero. The same is true on the central quotient by the Haar pushforward. Thus an orbit average of modulus at least $\rho$ has discrepancy at least $\rho$, exceeding $[\rho/(2CQ^c)]\|T_h\|_{\mathrm{Lip}}$ when the common constant is chosen to dominate the bound in step 5.1. This proves the non-equidistribution assertion on every nonempty interval. If $d=1$, then $G_2=\{e\}$, $H$ is the diagonal $G$ and $D=H$; the quotient is a point and the preceding $(z,e)$ argument is inapplicable. [F3, F9, step 5.1, algebra, choose]

7.1 All operations constructing the relative square, its bases and its coordinate maps use boundedly many rational operations in fixed dimension and degree. The preceding estimates therefore have constants depending only on $m,d$, and are uniform in $h$, $N$ and the unbounded original orbit coordinates. If $Q$ and $K$ are fixed powers of $\delta^{-1}$, every estimate is a fixed power of $\delta^{-1}$. This proves all the stated assertions. [step 4.1, step 2.2, step 3.2, step 5.1, step 6.1, step 3.3, algebra] ∎

## Remarks

The local reconstruction reads GT12's complete Proposition 7.2, Lemmas 7.4–7.5 and their surrounding orbit construction, together with GT14 Section 4. It does not assert whole-paper or visual PDF reading. The order-zero polynomial check includes the erratum's correction. In the degree-one base case of a quantitative criterion, the group is abelian and the orbit is linear, so the torus criterion must be used directly. A zero vertical frequency instead gives an invariant function on the central quotient, whose metric and Haar descent are supplied by the local metric lemma. Finally, annihilation of $[G,G_2]$ here is weaker than the condition $[G,G]\subseteq\ker\widetilde\eta_2$ needed for a finer filtration; that extra condition must be established at its later use. No unequal-sides multiparameter theorem or external theorem import is involved.
