---
id: ex-torus-links-as-closures-of-two-strand-braids
kind: example
title: "Torus links as closures of two-strand braids"
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [def-closure-of-a-geometric-braid, def-elementary-geometric-half-twist,
       def-braid-group-by-the-artin-presentation,
       lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "Birman and Brendle, Braids: A Survey, Handbook of Knot Theory chapter, author manuscript; section 2, printed pp. 12-26"
      url: "https://www.math.columbia.edu/~jb/Handbook-21.pdf"
    - title: "Ozsvath, Stipsicz and Szabo, Grid Homology for Knots and Links, AMS Surveys and Monographs 208 (2015); section 2.1, printed pp. 13-19; Appendix B.1, printed pp. 367-372"
      url: "https://web.math.princeton.edu/~petero/GridHomologyBook.pdf"
---

## Example

For $m\in\mathbb Z$ let $\sigma_1^m\in B_2$ ([[def-braid-group-by-the-artin-presentation]]),
and let $\widehat{\sigma_1^m}$ be its oriented closure
([[def-closure-of-a-geometric-braid]]). Then $\widehat{\sigma_1^m}$ is the
$(2,m)$ torus link: it has $\gcd(2,m)$ components, namely two components when
$m$ is even and one component when $m$ is odd. In the small cases the closure
is the standard picture of the $(2,m)$ torus link: for $m=0$ it is the
two-component unlink, for $m=\pm1$ it is the unknot, and for $m=\pm3$ it is the
trefoil, the two signs giving the two mirror images. Here the **unknot** is
the closure of the trivial one-strand braid, the **two-component unlink** is
the closure of the trivial two-strand braid, and the **trefoil** is the closure
of $\sigma_1^{\pm3}$; those closures are the definitions used for these three
links on this page.

## Facts & Assumptions

**Given:** An integer $m$ and the finite word $\sigma_1^m$ in $B_2$; no choice axiom is assumed.

[F1] The fixed closure map is $\varphi([(x,t)])=(\sqrt{1-|x|^2}e^{2\pi it},x)$; permutation cycles give its components. Finite words have explicit smooth endpoint-flat models, and the trivial two-braid bounds the specified disjoint latitude-cap disks ([[def-closure-of-a-geometric-braid]]).

[F2] For $B_2$ the fixed basepoints are $q_1=-r,q_2=r$, $r=1/12$, and a signed elementary half twist rotates them through the corresponding signed half turn; its permutation is $(1\ 2)$ ([[def-elementary-geometric-half-twist]], [[def-braid-group-by-the-artin-presentation]]).

[F3] A smooth Euclidean map with nonzero Jacobian determinant has a smooth local inverse, without any choice assumption ([[lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space]]).

## Verification

1.1 **The literal word model and component count.** Write $R=\sqrt{1-r^2}$. The finite signed half-turn word has disk strands $\pm r e^{i\Theta(t)}$, where $\Theta$ is smooth, $\Theta(0)=0$, $\Theta(1)=m\pi$ and all positive-order endpoint derivatives vanish. Take $\Theta=0$ at $m=0$; concatenating the finitely many flattened half-turn angles gives such a $\Theta$ for every other $m$. The two points stay distinct. Its literal smooth closure has $z=R e^{2\pi it}$, $w=\pm r e^{i\Theta(t)}$ by [F1]. The endpoint permutation is $(1\ 2)^m$, so there is one component when $m$ is odd and two when $m$ is even, including $m=0$. This is $\gcd(2,m)$, with the positive gcd convention for negative $m$. [F1, F2, construct]

2.1 **An explicit ambient isotopy to the uniform torus model.** Set $\Delta(t)=m\pi t-\Theta(t)$. Its values at both ends are zero, its first derivatives at both ends are $m\pi$, and all higher endpoint derivatives agree; hence it is a smooth function on the page circle. Choose a fixed smooth radial cutoff $\chi(|x|^2)$ equal to one near $r^2$ and zero near $|x|=1$. On $V$ use $H_s([(x,t)])=[(e^{is\chi(|x|^2)\Delta(t)}x,t)]$. Its inverse rotates by the negative angle, since $|x|$ is unchanged. It is a smooth isotopy, and through the explicit $\varphi$ it extends by identity across the axis because the cutoff is zero near the disk boundary. It preserves orientation as a smooth path of diffeomorphisms starting at identity. At $s=1$ the curve is exactly $z=R e^{2\pi it}$, $w=\pm r e^{im\pi t}$. For odd $m$, concatenate its two strands with parameter $u\in\mathbb R/2\mathbb Z$; this gives $z=R e^{2\pi iu}$, $w=r e^{im\pi u}$, with winding pair $(2,m)$ after parameter $u/2$. For even $m$, each strand is a circle with winding pair $(1,m/2)$ and the two are disjoint. These are the standard torus curves $T(2,m)$, including the stated component count. No generic continuous-braid smoothing theorem or Markov-preservation assumption is used. [F1, F2, step 1.1, construct]

3.1 **The two one-crossing oriented unknots without Choice.** For $m=\epsilon=\pm1$, use the chart of $S^3\setminus\{w=0\}$ with $\theta=\arg w$ and $\xi=z e^{-2\epsilon i\theta}$. Its inverse is $(\xi,\theta)\mapsto(\xi e^{2\epsilon i\theta},\sqrt{1-|\xi|^2}e^{i\theta})$, so it is explicitly $D_\xi^\circ\times S^1$. The curve from step 2.1 has $\xi=R$ constant. Move this disk point along the real segment from $R$ to $0$ by finitely many small cutoff translations $F_s(x)=x+s\eta(x)v$, with compact support in $D_\xi^\circ$ and $\|D\eta\|_\infty|v|<1$. A fixed smooth bump and a sufficiently fine finite subdivision suffice because that compact segment has positive distance $1-R$ from the boundary. The inverse is the unique limit of $x_{k+1}=y-s\eta(x_k)v$, starting at $x_0=y$: successive differences are bounded by a geometric sequence with ratio at most $\|D\eta\|_\infty|v|<1$, so the explicit sequence converges and its fixed point is unique. The Jacobian has determinant $1+sD\eta\cdot v>0$; [F3] makes the already constructed inverse smooth locally and hence globally. Each map is identity outside its compact interior support, so gives a disk diffeomorphism. Compose these finitely many disk-map families with the same parameter $s$; the finite smooth composition starts at identity and at $s=1$ sends $R$ to $0$. Its product with the unchanged $\theta$ extends by identity across $\{w=0\}$, since $|\xi|\to1$ there. This ambient isotopy takes the curve to $(0,e^{i\theta})$. The explicit unitary rotation $(z,w)\mapsto(\cos a\,z+\sin a\,w,-\sin a\,z+\cos a\,w)$, $0\le a\le\pi/2$, then takes it to the trivial one-braid circle $(e^{i\theta},0)$. For $\epsilon=1$ its orientation is already the positive page orientation. For $\epsilon=-1$ reverse that circle's negative angular orientation using $(z,w)\mapsto(\overline z,\overline w)$; this map is the endpoint of the explicit $\pi$ rotation in the real plane of the two imaginary coordinates, an orientation-preserving path in $SO(4)$. Thus both signs give the oriented unknot. Every construction is explicit or a finite selection; no countable choice is used. [F1, F3, step 2.1, construct]

4.1 **The unlink, trefoils and conclusion.** At $m=0$ step 1.1 is the literal trivial two-braid closure, whose explicit disjoint spanning disks are [F1]. At $m=\pm3$, step 2.1 gives the standard $(2,\pm3)$ torus knots, the trefoils named in the Statement. The map $(z,w)\mapsto(z,\overline w)$ changes $m$ to $-m$ and reverses the ambient orientation, so the two are mirrors. Steps 1.1-3.1 give the component formula and both one-crossing unknots, and the coordinate curves verify $T(2,m)$ for every integer $m$. [F1, F2, step 1.1, step 2.1, step 3.1] ∎
