---
id: ex-root-groups-and-bruhat-cells-for-sl2
kind: example
title: Root groups and Bruhat cells for SL_2
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 30
deps: [def-root-datum-of-a-split-reductive-group, lem-sl2-structure-and-root-coordinates, thm-bruhat-decomposition-for-split-reductive-group, thm-root-subgroups-of-a-split-reductive-group, lem-homogeneous-curves-and-automorphisms-of-p1, def-axiom-of-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "J. S. Milne, Algebraic Groups (corrected 2022 printing, Cambridge University Press)"
      url: "https://www.jmilne.org/math/Books/iAG2022.pdf"
      locator: "Ch. 20 (20.37)-(20.41), printed pp. 422-423; Ch. 21 (21.15) and (21.68)-(21.84)"
    - title: "Florian Herzig, Linear Algebraic Groups (University of Toronto lecture notes, 2013)"
      url: "https://www.math.toronto.edu/~herzig/lin-alg-groups13.pdf"
      locator: "Remark 172, p. 76"
---

## Example

Assume the Axiom of Choice inherited from the named suppliers. Let $k$ be any field and $G=\mathrm{SL}_2$ over $k$ with diagonal torus $T_2=\{\operatorname{diag}(x,x^{-1})\}$, upper triangular Borel $B$, $U^+=\{\binom{1\ a}{0\ 1}\}$ and $U^-=\{\binom{1\ 0}{a\ 1}\}$ ([[def-root-datum-of-a-split-reductive-group]], [[lem-sl2-structure-and-root-coordinates]], [[thm-bruhat-decomposition-for-split-reductive-group]]). The root datum is $X(T_2)=\mathbb Z\chi$ with $\alpha=2\chi$ and $\alpha^\vee=\chi^\vee$, so $\langle\alpha,\alpha^\vee\rangle=2$ and the group is simply connected; the root groups are $U_{\pm\alpha}=U^\pm$, $n_\alpha=\binom{0\ 1}{-1\ 0}$ represents $s_\alpha$, $tu_\alpha(a)t^{-1}=u_\alpha(\alpha(t)a)$, and $\mathfrak{sl}_2=\mathfrak t\oplus\mathfrak g_\alpha\oplus\mathfrak g_{-\alpha}$ with $\dim\mathfrak g_{\pm\alpha}=1$. The Weyl group is $W=\{1,s_\alpha\}\cong\mathbb Z/2$; the Bruhat decomposition is $G=B\sqcup Bn_\alpha B$ with $Bn_\alpha B=U^+n_\alpha B$ the open Bruhat cell, parametrized by $U^+\times B\cong\mathbf A^1\times\mathbf G_m\times\mathbf A^1$; separately $U^-T_2U^+$ is the open Gaussian cell; on $k$-points $\mathrm{SL}_2(k)=B(k)\sqcup B(k)n_\alpha B(k)$, while $G/B\cong\mathbf P^1$ with $G(k)$ acting through $\mathrm{PGL}_2(k)$. The cell $B$ has dimension $2$ and the open Bruhat cell has dimension $3$; the unique longest element $w_0=s_\alpha$ gives this dense open cell, and the opposite Borel is $B^-=U^-T$.

## Facts & Assumptions

**Given:** AC, a field $k$ and $G=\mathrm{SL}_2$ with its diagonal torus $T_2$, Borel $B=U^+T_2$ and root groups $U^\pm$.

[F1] The root coordinates of $\mathrm{SL}_2$: $X(T_2)=\mathbb Z\chi$, $\Phi=\{\pm2\chi\}$, $\alpha^\vee=\chi^\vee$, $n_\alpha=u_\alpha(1)u_{-\alpha}(-1)u_\alpha(1)$ represents $s_\alpha$, and the conjugation identities hold ([[lem-sl2-structure-and-root-coordinates]], [[def-root-datum-of-a-split-reductive-group]]).

[F2] Bruhat decomposition: for a split reductive group, $G=\bigsqcup_{w\in W}Bn_wB$, the multiplication $U^w\times B\to Bn_wB$ is an isomorphism, the big cell is open dense with $U^-\times T\times U\to G$ an open immersion, and the flag-cell dimensions are $n(w)$ while group cells have dimension $\dim B+n(w)$ ([[thm-bruhat-decomposition-for-split-reductive-group]], [[thm-root-subgroups-of-a-split-reductive-group]]).

[F3] Homogeneous curves and $\operatorname{Aut}(\mathbf P^1)=\mathrm{PGL}_2$: the quotient of $\mathrm{SL}_2$ by the Borel subgroup is a smooth complete geometrically connected homogeneous curve with the rational base point $B$, hence $\mathbf P^1$, with the action of $G$ through $\mathrm{PGL}_2$ ([[lem-homogeneous-curves-and-automorphisms-of-p1]], [[def-root-datum-of-a-split-reductive-group]]).

## Verification

1.1 The root datum and root coordinates are those of [F1]: $\Phi=\{\pm2\chi\}$ with coroot $\chi^\vee$ and $\langle\alpha,\alpha^\vee\rangle=2$, so the root datum is the simply connected rank-one datum; the root groups are $U_{\pm\alpha}=U^\pm$, and the Lie algebra decomposes as $\mathfrak{sl}_2=\mathfrak t\oplus\mathfrak g_\alpha\oplus\mathfrak g_{-\alpha}$ with one-dimensional root spaces. The Weyl group is $W=N_G(T_2)/T_2=\{1,s_\alpha\}\cong\mathbb Z/2$ because $\mathrm{SL}_2$ has exactly two Borel subgroups containing $T_2$, namely $B$ and $U^-T_2=B^-$. [F1, given, algebra]

2.1 Write $g=\begin{pmatrix}a&b\\c&d\end{pmatrix}$ with $ad-bc=1$. The cell $B$ is defined by $c=0$ and has dimension $2$. If $c\ne0$, then $g=u_\alpha(a/c)n_\alpha\operatorname{diag}(-c,-c^{-1})u_\alpha(d/c)$ by multiplication. Thus $Bn_\alpha B=U^+n_\alpha B$ is exactly $c\ne0$, parametrized uniquely by $U^+\times T_2\times U^+$ and of dimension $3$. This proves the two-cell decomposition over $k$ and on $k$-points. The Gaussian cell $U^-T_2U^+$ is instead $a\ne0$, as follows from $g=u_{-\alpha}(c/a)\operatorname{diag}(a,a^{-1})u_\alpha(b/a)$; its multiplication map is also an open immersion, but its image differs from $Bn_\alpha B$. [F1, F2, step 1.1, algebra]

3.1 Finally $G/B\cong\mathbf P^1$ by [F3], since the quotient of the connected nonsolvable group $\mathrm{SL}_2$ by the Borel subgroup is a homogeneous curve; the cell decomposition of $G/B$ is $\{B\}\sqcup Y(s_\alpha)$ with $Y(s_\alpha)=Uw_0B/B\cong\mathbf A^{n(w_0)}=\mathbf A^1$, so the two Bruhat cells of the flag variety correspond to the two $T_2$-fixed points of $\mathbf P^1$; the action of $G(k)$ factors through $\mathrm{PGL}_2(k)=\operatorname{Aut}(\mathbf P^1)(k)$. [F2, F3, step 2.1, algebra] ∎ 