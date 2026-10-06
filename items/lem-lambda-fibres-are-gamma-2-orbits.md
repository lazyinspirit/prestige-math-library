---
id: lem-lambda-fibres-are-gamma-2-orbits
kind: lemma
title: "The fibres of lambda are exactly the Gamma(2)-orbits"
status: published
origin: pipeline
deps:
  - def-modular-lambda-function
  - def-principal-congruence-subgroup-gamma-2
  - lem-lambda-transformation-laws
  - lem-gamma-2-is-torsion-free-and-has-no-elliptic-points
  - lem-weierstrass-p-degree-two-and-half-periods
  - thm-complex-torus-weierstrass-cubic-isomorphism
  - thm-weierstrass-p-differential-equation
  - thm-weierstrass-lattice-discriminant-is-nonzero
  - thm-elliptic-cubic-chord-tangent-group-law
  - thm-complex-torus-quotient-is-well-defined
  - thm-covering-space-lifting-criterion
  - cor-entire-biholomorphisms-are-affine
  - thm-identity-theorem-holomorphic-functions
  - def-complex-lattice-and-complex-torus
  - def-weierstrass-elliptic-p-function
  - thm-every-complex-number-has-a-square-root
  - thm-convex-subsets-have-trivial-fundamental-group
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
    scope: "historical complete Step5 reader; item lem-lambda-fibres-are-gamma-2-orbits; evidence research/frontier-38-owner-30-reader-21.md, research/frontier-38-owner-30-reader-findings-21.json. Original reports retain their scope and source limitations; no recursive audit of all published prerequisites or complete bibliography is claimed. Restored from completed 2026-10-03 evidence; no new audit performed."
    delegated_by: "tools/autopilot frontier-38-owner-30 historical dispatched reader/repair lane"
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "C. T. McMullen, Advanced Complex Analysis, Math 213a course notes (Harvard, 2010)"
      url: "https://people.math.harvard.edu/~ctm/home/text/class/harvard/213a/10/html/home/course/course.pdf"
      locator: "Theorem 5.30 and its proof, printed p. 96: lambda gives a holomorphic bijection of the level-two quotient."
    - title: "J. S. Milne, Modular Functions and Modular Forms (v1.31, 2017)"
      url: "https://www.jmilne.org/math/CourseNotes/MF.pdf"
      locator: "Chapter 3, printed pp. 46–47: the Weierstrass cubic and lattice scaling background; the labelled fibre argument is local."
proof_strategy: direct
---

## Statement

If $\tau,\tau'\in\mathfrak H$ and $\lambda(\tau)=\lambda(\tau')$, then $\tau'=\gamma\cdot\tau$ for some $\gamma\in\Gamma(2)$. In particular $\lambda$ separates the $\Gamma(2)$-orbits on $\mathfrak H$.

## Facts & Assumptions

**Given:** $\lambda(\tau)=\frac{e_3-e_2}{e_1-e_2}$ with $e_1=\wp_{\Lambda_\tau}(1/2)$, $e_2=\wp_{\Lambda_\tau}(\tau/2)$, $e_3=\wp_{\Lambda_\tau}((1+\tau)/2)$, and $e_1,e_2,e_3$ pairwise distinct with $e_1+e_2+e_3=0$ ([[def-modular-lambda-function]], [[lem-weierstrass-p-degree-two-and-half-periods]], [[thm-weierstrass-lattice-discriminant-is-nonzero]], [[def-complex-lattice-and-complex-torus]]).

[F1] $\wp(z)=\wp(w)$ if and only if $w\equiv z$ or $w\equiv-z$ modulo the lattice ([[lem-weierstrass-p-degree-two-and-half-periods]]); in particular on the $2$-torsion classes $\pm h$ coincide.

[F2] The invariants $g_2=60G_4$, $g_3=140G_6$ satisfy $\wp'^2=4\wp^3-g_2\wp-g_3$, and $4x^3-g_2x-g_3=4(x-e_1)(x-e_2)(x-e_3)$ with $e_1+e_2+e_3=0$, so $g_2=-4(e_1e_2+e_1e_3+e_2e_3)$ and $g_3=4e_1e_2e_3$; moreover $G_4(c\Lambda)=c^{-4}G_4(\Lambda)$ and $G_6(c\Lambda)=c^{-6}G_6(\Lambda)$ for $c\in\mathbb C^\times$, directly from the defining absolutely summable series ([[thm-weierstrass-p-differential-equation]], [[def-weierstrass-elliptic-p-function]]).

[F3] The map $[z]\mapsto[\wp_\Lambda(z):\wp_\Lambda'(z):1]$, extended at $[0]$ to $O=[0:1:0]$, is a biholomorphism from the torus to the smooth cubic $Y^2Z=4X^3-g_2XZ^2-g_3Z^3$ ([[thm-complex-torus-weierstrass-cubic-isomorphism]]). A nonzero complex number has a square root ([[thm-every-complex-number-has-a-square-root]]).


[F5] $\gamma\in\Gamma(2)$ exactly when $\gamma\equiv I\pmod2$, i.e. its two columns are congruent to $(1,0)$ and $(0,1)$ modulo $2$; and $\lambda(\gamma\tau)=\lambda(\tau)$ ([[def-principal-congruence-subgroup-gamma-2]], [[lem-lambda-transformation-laws]]).

[F6] The torus class maps are holomorphic coverings; maps from the simply connected plane lift uniquely after a basepoint is fixed, and every entire biholomorphism is affine ([[thm-complex-torus-quotient-is-well-defined]], [[thm-convex-subsets-have-trivial-fundamental-group]], [[thm-covering-space-lifting-criterion]], [[cor-entire-biholomorphisms-are-affine]]).

## Proof

1.1 Put $L_j=e_j(\tau)$ and $L_j'=e_j(\tau')$. If $\lambda(\tau)=\lambda(\tau')$ then with $u:=L_3-L_2$, $v:=L_1-L_2$, $u':=L_3'-L_2'$, $v':=L_1'-L_2'$ we have $u/v=u'/v'$, so $u'v=uv'$. Hence $(L_3'-L_2')(L_1-L_2)=(L_3-L_2)(L_1'-L_2')$, i.e. $(L_3'-L_2')(L_1-L_2)-(L_3-L_2)(L_1'-L_2')=0$, a determinant condition; the affine map $\Phi(x)=\alpha x+\beta$ with $\alpha:=\frac{L_2'-L_1'}{L_2-L_1}$ and $\beta:=L_1'-\alpha L_1$ satisfies $\Phi(L_1)=L_1'$ and $\Phi(L_2)=L_2'$, and the displayed identity says exactly $\Phi(L_3)=L_3'$. Since $\sum L_j=\sum L_j'=0$ we get $\beta=\frac13\bigl(\sum L_j'\bigr)-\alpha\frac13\bigl(\sum L_j\bigr)=0$, so $L_j'=\alpha L_j$ for $j=1,2,3$ with $\alpha\ne0$. [F2, given, algebra]

2.1 Choose a square root $a$ of $\alpha^{-1}$ and put $\Lambda^*:=a\Lambda_\tau$. By [F2], $G_4(\Lambda^*)=a^{-4}G_4(\Lambda_\tau)=\alpha^2G_4(\Lambda_\tau)$ and $G_6(\Lambda^*)=a^{-6}G_6(\Lambda_\tau)=\alpha^3G_6(\Lambda_\tau)$, hence $g_2(\Lambda^*)=\alpha^2g_2(\tau)$ and $g_3(\Lambda^*)=\alpha^3g_3(\tau)$. On the other hand $e_j(\tau')=\alpha e_j(\tau)$ by 1.1 and the invariants are the elementary symmetric functions of the three branch values [F2], so $g_2(\tau')=\alpha^2g_2(\tau)$ and $g_3(\tau')=\alpha^3g_3(\tau)$ as well; therefore $\Lambda^*$ and $\Lambda_{\tau'}$ have the same invariants $g_2,g_3$. [F2, step 1.1, given, algebra]

3.1 By 2.1 the lattices $\Lambda^*$ and $\Lambda_{\tau'}$ have the same invariants, so their Weierstrass cubics are identical. Their biholomorphisms [F3] to this cubic induce a biholomorphism of tori fixing the origin and matching the three labelled half-periods: the branch values for $\Lambda^*=a\Lambda_\tau$ are $a^{-2}L_j=\alpha L_j=L'_j$. Lift this map and its inverse to based maps of $\mathbb C$ using the holomorphic lattice coverings, the lifting criterion and simple connectedness of $\mathbb C$; uniqueness of based lifts makes the lifts inverse biholomorphisms. The entire-biholomorphism theorem gives a lift $z\mapsto bz$, $b\ne0$. Therefore multiplication by $A:=ba$ carries $\Lambda_\tau$ onto $\Lambda_{\tau'}$ and matches the labelled half-periods modulo these lattices. This labelled homothety, rather than the false Laurent recursion previously recorded, is sufficient for the final congruence calculation. [F1, F2, F3, F6, step 2.1, given, construct]

4.1 Since $\Lambda_{\tau'}=A\Lambda_\tau$, the numbers $A$ and $A\tau$ form a positively oriented basis of $\Lambda_{\tau'}$ (multiplication by $A$ preserves orientation), so $A=p+q\tau'$ and $A\tau=r+s\tau'$ for integers $p,q,r,s$ forming a matrix $\gamma_0=\bigl(\begin{smallmatrix}p&r\\q&s\end{smallmatrix}\bigr)\in SL_2(\mathbb Z)$. The labelled homothety from 3.1 gives $Ah_j(\tau)\equiv h_j(\tau\prime)\pmod{\Lambda_{\tau\prime}}$ for $j=1,2,3$. Taking $j=1$ gives $p+q\tau'=A\equiv1\pmod{2\Lambda_{\tau'}}$, so $p$ is odd and $q$ even; taking $j=2$ gives $A\tau=r+s\tau'\equiv\tau'\pmod{2\Lambda_{\tau'}}$, so $r$ is even and $s$ odd; hence $\gamma_0\equiv I\pmod2$ [F5]. Finally $A\tau=r+s\tau'$ and $A=p+q\tau'$ give $\tau'=\frac{p\tau-r}{s-q\tau}$, that is $\tau'=\gamma\cdot\tau$ for $\gamma=\bigl(\begin{smallmatrix}p&-r\\-q&s\end{smallmatrix}\bigr)$, which has determinant $ps-qr=1$ and entries congruent to $I$ modulo $2$, so $\gamma\in\Gamma(2)$ [F5]. Conversely $\lambda$ is $\Gamma(2)$-invariant [F5], so the fibres of $\lambda$ are exactly the $\Gamma(2)$-orbits. [F1, F2, F5, step 3.1, given, algebra] ∎
