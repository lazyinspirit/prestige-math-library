---
dependency_level: 2
id: lem-maass-selberg-truncation-green-identity
kind: lemma
title: "Maass--Selberg truncation identity from Green formula"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - def-eisenstein-series-for-congruence-subgroups
  - def-hyperbolic-laplacian-on-the-upper-half-plane
  - def-weight-zero-maass-form-on-gamma0n
  - thm-greens-theorem-for-finite-unions-of-elementary-regions
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Peter Sarnak, Spectral Theory of Automorphic Forms; notes by Tony Feng and Gyujin Oh"
      url: "https://web.math.princeton.edu/~gyujino/Sarnak_course.pdf"
      locator: "Section5.1, Lemma5.1.1, printed p.24; the omitted Green calculation is proved here for finitely many cusps and an even unitary character."
---

## Statement

Let $\Gamma=\Gamma_0(N)$, $N\ge1$, with even unitary character $\chi$. At each cusp choose an integral scaling matrix $\sigma_{\mathfrak a}$ and width $w_{\mathfrak a}$ as in the definition of Eisenstein series for congruence subgroups. Fix $T>1$ large enough that these cusp tails are disjoint and their complement in the quotient is compact. Let $u,v$ be smooth $\chi$-automorphic functions with
$$\Delta_{\mathbb H}u=s(1-s)u,\qquad \Delta_{\mathbb H}v=t(1-t)v.$$
At each singular cusp suppose their constant terms are exactly
$$C_{u,\mathfrak a}(y)=a_{\mathfrak a}y^s+b_{\mathfrak a}y^{1-s},\qquad C_{v,\mathfrak a}(y)=c_{\mathfrak a}y^t+d_{\mathfrak a}y^{1-t}.$$
On every cusp tail suppose the functions after subtraction of these constant terms, and their first $y$ derivatives in cusp coordinates, are bounded by $C e^{-c y}$, uniformly in the real coordinate, for some $C,c>0$. At nonsingular cusps subtract nothing and impose the same decay. Define $\Lambda^T u$ by subtracting $C_{u,\mathfrak a}(y)$ on each singular cusp tail $y>T$, and changing nothing elsewhere; define $\Lambda^T v$ likewise. Then both truncations are square-integrable. If $s\ne\bar t$ and $s+\bar t\ne1$, their inner product, linear in its first argument, is
$$\langle\Lambda^T u,\Lambda^T v\rangle=\sum_{\mathfrak a\text{ singular}}w_{\mathfrak a}\left(\frac{a_{\mathfrak a}\overline{c_{\mathfrak a}}T^{s+\bar t-1}-b_{\mathfrak a}\overline{d_{\mathfrak a}}T^{1-s-\bar t}}{s+\bar t-1}+\frac{a_{\mathfrak a}\overline{d_{\mathfrak a}}T^{s-\bar t}-b_{\mathfrak a}\overline{c_{\mathfrak a}}T^{\bar t-s}}{s-\bar t}\right).$$
For families of such eigenfunctions depending continuously on $s,t$ on compact subsets, with continuous displayed coefficients and locally uniform exponential tail bounds, the identity extends to coincident denominator values by its continuous limit. This is a conditional eigenfunction identity: it asserts no existence, meromorphic continuation, functional equation or scattering-matrix properties of Eisenstein series.

## Statement references

[[def-eisenstein-series-for-congruence-subgroups]]

[Sarnak, Feng and Oh, Section5.1, Lemma5.1.1](https://web.math.princeton.edu/~gyujino/Sarnak_course.pdf)

## Facts & Assumptions

**Given:** The finite-level character, cusp coordinates, smooth eigenfunctions, constant terms, decay bounds and truncation height in the Statement. Put $q=\bar t$ and $D=s(1-s)-q(1-q)=(s-q)(1-s-q)$.

[F1] The cusp coordinates have period $w_{\mathfrak a}$, their measure is $y^{-2}dx\,dy$, and the character is trivial on a singular cusp stabilizer. The quotient has finitely many cusp ends and finite area. ([[def-weight-zero-maass-form-on-gamma0n]], [[def-eisenstein-series-for-congruence-subgroups]])

[F2] The differential expression is $\Delta_{\mathbb H}=-y^2(\partial_x^2+\partial_y^2)$. ([[def-hyperbolic-laplacian-on-the-upper-half-plane]])

[F3] Green's formula holds on finite unions of elementary planar regions; its real formula also holds for complex fields by taking real and imaginary parts. ([[thm-greens-theorem-for-finite-unions-of-elementary-regions]])

## Proof

1.1 Each truncation is smooth and bounded on a compact core except for finite jump discontinuities along the truncation horocycles, which affect no area integral. On a cusp tail it is an exponentially decaying remainder, so its squared integral is bounded by $w_{\mathfrak a}C^2\int_T^\infty e^{-2cy}y^{-2}dy<\infty$. Finitely many tails and the compact core give both claimed square integrabilities. At a singular cusp the remainder has zero average in $x$ by the definition of constant term, and so does its $y$ derivative, by differentiating that finite-interval integral. [given, F1, algebra]

1.2 For $R>T$ let $X_R$ be the quotient with every cusp tail above height $R$ removed, and put $I_R=\int_{X_R}u\overline v\,d\mu$. Apply [F3] to the vector field $u\nabla\overline v-\overline v\nabla u$ on a fundamental polygon truncated at those horocycles. Such a polygon is a finite union of translates of the modular polygon; its edges and truncating horocycles are circular or straight arcs. Splitting at their finitely many intersections and horizontal and vertical tangencies supplies elementary planar pieces for [F3]. Internal edges cancel. Paired fundamental-polygon sides cancel too: under a determinant-one Mobius map the normal derivative scales inversely to the length element, and the two automorphy factors multiply to $\chi(\gamma)\overline{\chi(\gamma)}=1$, while the paired orientations are opposite. One may remove small disks around vertices first; smooth lifts bound the fields there, and their boundary lengths tend to zero. The ineffective element $-I$ acts trivially because $\chi(-1)=1$. Thus only top horocycles remain. In each cusp coordinate their outward flux is $u\overline{v_y}-u_y\overline v$, integrated over an interval of length $w_{\mathfrak a}$. By [F2] the divergence integrated over the polygon is $D I_R$. Hence $D I_R=\sum_{\mathfrak a}\int_0^{w_{\mathfrak a}}(u\overline{v_y}-u_y\overline v)(\sigma_{\mathfrak a}(x+iR))\,dx.$ Here $y$ derivatives mean derivatives of the pullbacks to those coordinates. [given, F1, F2, F3, algebra]

2.1 At a singular cusp substitute $u=C_u+U$ and $v=C_v+V$ into the last flux. The mixed terms vanish after $x$ integration, by step 1.1, leaving $w_{\mathfrak a}(C_u(R)\overline{C_v'(R)}-C_u'(R)\overline{C_v(R)})+\int_0^{w_{\mathfrak a}}(U\overline{V_y}-U_y\overline V)\,dx.$ The last integral tends to zero exponentially by the assumed bounds. At nonsingular cusps the entire flux tends to zero by the same bounds. Put $W_{\mathfrak a}(y)=C_{u,\mathfrak a}(y)\overline{C_{v,\mathfrak a}'(y)}-C_{u,\mathfrak a}'(y)\overline{C_{v,\mathfrak a}(y)}$. Since each constant power satisfies $C_u''=-s(1-s)y^{-2}C_u$ and $\overline{C_v}''=-q(1-q)y^{-2}\overline{C_v}$, differentiation gives $W_{\mathfrak a}'(y)=D C_{u,\mathfrak a}(y)\overline{C_{v,\mathfrak a}(y)}y^{-2}.$ [given, step 1.1, step 1.2, algebra]

3.1 Orthogonality of each remainder to constants in its period gives exactly $\int_{X_R}\Lambda^T u\overline{\Lambda^T v}\,d\mu=I_R-\sum_{\mathfrak a\text{ singular}}w_{\mathfrak a}\int_T^R C_{u,\mathfrak a}(y)\overline{C_{v,\mathfrak a}(y)}\,\frac{dy}{y^2}.$ Use steps 1.2 and 2.1 and integrate $W'=D C_u\overline{C_v}y^{-2}$. The right side equals $D^{-1}\sum_{\mathfrak a}w_{\mathfrak a}W_{\mathfrak a}(T)+o(1)$ as $R\to\infty$. The left side tends to the full truncated inner product, since the product of the two remainders is exponentially integrable on the tails. Thus that inner product is $D^{-1}\sum w_{\mathfrak a}W_{\mathfrak a}(T)$. [step 1.1, step 1.2, step 2.1, algebra]

4.1 Expand $W(T)$ using the two constant powers. Its four coefficients before division by $D$ are $(q-s)a\bar c T^{s+q-1}$, $(1-q-s)a\bar d T^{s-q}$, $(s+q-1)b\bar c T^{q-s}$ and $(s-q)b\bar d T^{1-s-q}$. Dividing by $(s-q)(1-s-q)$ gives, respectively, the four terms in the Statement with signs $+,+,-,-$. Substitution into step 3.1 proves the formula. For the stated continuous families, the compact-core integrals are continuous by uniform convergence on compact sets; the locally uniform exponential bound makes tail integrals uniformly small. The inner product is therefore continuous in the parameters, so the displayed expression has the asserted continuous limit at each allowed coincident denominator value. No continuation of an Eisenstein family is used or inferred. [given, step 1.1, step 3.1, algebra] ∎
