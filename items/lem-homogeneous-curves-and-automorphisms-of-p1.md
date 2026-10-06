---
id: lem-homogeneous-curves-and-automorphisms-of-p1
kind: lemma
title: Homogeneous curves and automorphisms of P^1
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 21
deps: [thm-cocharacter-limit-subgroups, thm-luna-map-and-bialynicki-birula-decomposition, def-group-of-multiplicative-type-and-torus, lem-general-linear-group-scheme-and-its-coordinate-ring, thm-homogeneous-space-for-smooth-affine-group, def-fibre-product-schemes-universal-property, def-smooth-morphism-schemes, def-complete-variety, def-axiom-of-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "J. S. Milne, Algebraic Groups (corrected 2022 printing, Cambridge University Press)"
      url: "https://www.jmilne.org/math/Books/iAG2022.pdf"
      locator: "Ch. 20 (20.2)-(20.12), printed pp. 406-412; Ch. 5 (5.49); Ch. 13 (13.20)"
---

## Statement

Assume the Axiom of Choice inherited from the named suppliers. Let $k$ be a field. (a) A smooth complete connected curve $C$ over $k$ with a $k$-point that becomes isomorphic to $\mathbf P^1$ over $k^{\mathrm a}$ is isomorphic to $\mathbf P^1$. (b) A smooth complete geometrically connected curve with a $k$-point, homogeneous under a smooth connected affine algebraic group, is isomorphic to $\mathbf P^1$, and $\operatorname{Aut}(\mathbf P^1)=\operatorname{PGL}_2$ as $k$-group schemes via the action on lines through the standard representation, the action being faithful with all automorphisms induced by $\operatorname{PGL}_2$. (c) For a finite-dimensional representation $(V,r)$ of a torus $T$ ([[def-group-of-multiplicative-type-and-torus]]) with weight decomposition $V=\bigoplus_i V_{\chi_i}$, the fixed points of $T$ on $\mathbf P(V)$ are the lines spanned by eigenvectors; if $T=\mathbf G_m$ and every occurring weight space (including weight zero) is one-dimensional, then $\mathbf P(V)^{\mathbf G_m}$ is finite and constant, and the closure of a non-fixed orbit has exactly two fixed points, namely the limits $\lim_{t\to0}tx$ and $\lim_{t\to\infty}tx$.

## Facts & Assumptions

**Given:** AC, a field $k$, a smooth complete connected curve $C$ over $k$ with a rational point, a smooth connected affine algebraic group acting homogeneously on the smooth complete geometrically connected curve $C$ in (b), and a representation $V$ of a torus $T$ in (c).

[F1] A smooth complete curve is determined by its function field, and a curve with a $k$-point whose base change to $k^{\mathrm a}$ is $\mathbf P^1$ has function field $k(t)$, hence is $\mathbf P^1$ (Milne, 20.2-20.4). The general linear group scheme represents invertible matrices, and $\mathrm{GL}_1=\mathbf G_m$ ([[lem-general-linear-group-scheme-and-its-coordinate-ring]]). We define $\operatorname{PGL}_2$ as the fppf quotient of $\mathrm{GL}_2$ by its central scalar subgroup $\mathbf G_m$ (Milne, 5.49); its representability and identification with $\operatorname{Aut}(\mathbf P^1)$ are justified in steps 2.1 and 3.1, using the three-section argument of Milne, 20.7-20.9.

[F2] Homogeneous spaces of smooth affine groups by closed subgroups are representable ([[thm-homogeneous-space-for-smooth-affine-group]], [[def-fibre-product-schemes-universal-property]]). A smooth complete connected curve over an algebraically closed field admitting a nontrivial action of a smooth connected affine algebraic group is $\mathbf P^1$ (Milne, Proposition 20.5).

[F3] For a torus representation admitting the character-weight decomposition over $k$ assumed in (c) (in particular, a representation of a split torus in [[def-group-of-multiplicative-type-and-torus]]), a point of $\mathbf P(V)$ is fixed by $T$ exactly when its representing line is contained in a single weight space, and for $T=\mathbf G_m$ the orbit map of a nonzero vector extends to $\mathbf P^1$ with limits the lowest and highest weight eigenlines ([[thm-luna-map-and-bialynicki-birula-decomposition]], [[thm-cocharacter-limit-subgroups]], [[def-complete-variety]], [[def-smooth-morphism-schemes]]).

## Proof

1.1 In (a), geometric genus is $0$ because $C_{k^{\mathrm a}}\cong\mathbf P^1$. A genus-zero smooth complete curve is a smooth conic, and a conic with a rational point is isomorphic to $\mathbf P^1$, for example by projection from that point. Hence $C\cong\mathbf P^1$. [F1, given, algebra]

2.1 For (b), base change to an algebraic closure. The action remains transitive on the positive-dimensional curve and is therefore nontrivial; [F2] gives $C_{k^{\mathrm a}}\cong\mathbf P^1$. The assumed $k$-point and step 1.1 then give $C\cong\mathbf P^1$ over $k$. The group $\mathrm{GL}_2$ is smooth affine, being the determinant-open subscheme of $\mathbf A^4$. Thus [F2] represents its fppf quotient by the closed central scalar subgroup $\mathbf G_m$; multiplication and inversion descend to this quotient, denoted $\operatorname{PGL}_2$, and its action on lines descends because scalars act trivially. [F1, F2, step 1.1, algebra]

3.1 Let $f$ be an automorphism of $\mathbf P^1_R$ for any $k$-algebra $R$. Locally on $\operatorname{Spec}R$, choose generators $v_\infty,v_0$ of the lines $f(\infty),f(0)$. Their fibrewise distinctness makes these columns a basis of $R^2$. In this basis a generator of $f(1)$ has two unit coordinates $a,b$, since it is distinct from both other lines in every fibre. The matrix with columns $av_\infty,bv_0$ therefore carries $(\infty,0,1)$ to $(f(\infty),f(0),f(1))$. An automorphism $h$ fixing these three sections is the identity: on the two affine charts it has coordinate polynomials $P(t),Q(t^{-1})$ with zero constant terms and unit linear coefficients (their polynomial inverses force those coefficients to be units), and $P(t)Q(t^{-1})=1$ on the overlap. If $P$ had highest nonzero degree $N>1$, the coefficient of $t^{N-1}$ in this product would be its leading coefficient times the unit linear coefficient of $Q$, a contradiction. Hence $P(t)=ct$, and $h(1)=1$ gives $c=1$; the overlap then gives $Q(t^{-1})=t^{-1}$. Finally, a matrix fixing the three lines is scalar: the first two force it to be diagonal and the third makes its diagonal entries equal. Thus the local matrices inducing $f$ are unique up to scalar and glue to a unique point of the fppf quotient. This proves $\operatorname{PGL}_2\cong\operatorname{Aut}(\mathbf P^1)$ as functors, hence as group schemes, including over nonreduced test algebras. [F1, step 2.1, algebra, construct]

4.1 For (c), a line is fixed by $T$ exactly when it is a one-dimensional subrepresentation, hence lies in a single weight space. Thus the fixed locus is the disjoint union of the projective spaces $\mathbf P(V_\chi)$. When $T=\mathbf G_m$ and every occurring weight space, including weight zero, has dimension one, these are finitely many $k$-rational points, giving a finite constant fixed scheme. For a non-fixed point $[v]$, write $v=\sum_n v_n$ according to integer weights, with least and greatest occurring weights $r<s$. The orbit map extends to $\mathbf P^1$, with endpoints $[v_r]$ and $[v_s]$; on the two affine charts this follows by factoring $t^r$ at zero and $t^s$ at infinity. This extension is surjective onto the orbit closure because its image is closed and contains the dense orbit. A point of the image of $\mathbf G_m$ is non-fixed, so the only fixed points of the closure are precisely the two endpoints. [F3, step 1.1, algebra] ∎
