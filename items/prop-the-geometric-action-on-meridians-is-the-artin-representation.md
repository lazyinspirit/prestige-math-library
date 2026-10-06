---
id: prop-the-geometric-action-on-meridians-is-the-artin-representation
kind: proposition
title: "The geometric action on meridians is the Artin representation"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
dependency_level: 6
deps: [thm-braid-group-is-the-boundary-fixed-mapping-class-group-of-the-punctured-disk, prop-the-artin-presentation-surjects-onto-geometric-braids, def-elementary-geometric-half-twist, def-standard-meridians-of-a-punctured-disk, thm-the-punctured-disk-fundamental-group-is-free-on-standard-meridians, def-the-artin-representation-on-a-free-group, def-artin-automorphisms-of-the-free-group, lem-the-standard-stem-system-cuts-the-punctured-disk-open-to-a-disk, lem-the-oriented-boundary-loop-represents-the-ordered-product-of-the-standard-meridians, thm-induced-fundamental-group-map-functoriality, def-axiom-of-choice]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
    scope: "Whole authored item, including statement or definition, every proof or verification step, and used direct supplier interfaces; completed prior Step5 reader/adjudicator evidence reconciled to the current mathematics. Transitive supplier proofs were not audited in full."
    delegated_by: "owner via tools/autopilot (frontier-38-owner-30)"
    evidence:
      - "research/frontier-38-owner-30-reader-15.md"
      - "research/frontier-38-owner-30-alpha-batch-15-5a.md"
      - "research/frontier-38-owner-30-step5-hash-15-post.json"
    reviewed_raw_sha256: "083d1bfb99ba815346f4490f6dd4309ddf3acf4514788be27a721ab910f2be02"
    content_sha256: "2050e1955d1040bcce7366c30f4698346abd644d882aa744acb0ca408fde53c3"
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "Juan Gonzalez-Meneses, Basic results on braid groups, section 1.6, printed pp. 8-10 (the action of sigma_i on the generators x_i, x_{i+1}, Figure 4)"
      url: "https://arxiv.org/pdf/1010.0321"
    - title: "Emil Artin, Theory of Braids, Annals of Mathematics 48 (1947), pp. 101-126, equations (14)-(15), printed pp. 113-114"
      url: "https://www.maths.ed.ac.uk/~v1ranick/papers/artinbraids.pdf"
    - title: "The published identification of the positive half twist with the supported half rotation, thm-braid-group-is-the-boundary-fixed-mapping-class-group-of-the-punctured-disk, statement parts 1 and 2"
      url: "https://arxiv.org/pdf/1010.0321"
---

## Statement

Assume AC. Let $G_n$ be the geometric braid group,
$\varphi_n:B_n\to G_n$ the published surjection of
[[prop-the-artin-presentation-surjects-onto-geometric-braids]], and
$$\Psi:G_n\longrightarrow\operatorname{Mod}(D^2,Q_n;\partial D^2)$$
the isomorphism of
[[thm-braid-group-is-the-boundary-fixed-mapping-class-group-of-the-punctured-disk]].
Identifying $\pi_1(D^2\setminus Q_n,d)$ with $F_n$ by the standard meridians of
[[def-standard-meridians-of-a-punctured-disk]], the automorphism of $F_n$
induced by the mapping class $\Psi(\varphi_n(\beta))$ equals $\rho(\beta)$ for
every braid word $\beta$. In particular the geometric half twist $\sigma_i$ acts
as the Nielsen automorphism of
[[def-artin-automorphisms-of-the-free-group]].

## Facts & Assumptions

**Given:** AC, the number $n$, the punctured disk $X=D^2\setminus Q_n$ with
basepoint $d$, the geometric braid group $G_n$ with its surjection $\varphi_n$
and the isomorphism $\Psi$, and the standard meridian loops $x_1,\dots,x_n$
with the identification $F_n\cong\pi_1(X,d)$, $x_j\mapsto[x_j]$.

[F1] *The published identification.* $\Psi$ is a group isomorphism, and for
$1\le i\le n-1$ the image of the standard positive geometric half twist
$\sigma_i$ under $\Psi\circ\varphi_n$ is the mapping class of the explicit
boundary-fixed homeomorphism $H_i$ constructed in the published proof, which is
supported in the support disc $U_i$ of the adjacent pair and exchanges $q_i$ and
$q_{i+1}$; the construction rotates the support disc about the midpoint $m_i$
through the half turn whose total angle is $\pi$.
([[thm-braid-group-is-the-boundary-fixed-mapping-class-group-of-the-punctured-disk]],
[[prop-the-artin-presentation-surjects-onto-geometric-braids]].)

[F2] *Positivity and the size of the support disc.* The support disc
$U_i=\{w:\lVert w-m_i\rVert_2<3h/2\}$ contains exactly the two base points
$q_i,q_{i+1}$, each at distance $h$ from $m_i$; the standard positive half twist
turns the moving pair anticlockwise about $m_i$, the label $i$ passing below its
midpoint $m_i$ and the label $i+1$ above. Hence the homeomorphism $H_i$ of [F1]
acts on $U_i$ as the half rotation of the pair about $m_i$ that carries $q_i$
through the lower half-plane to $q_{i+1}$ and $q_{i+1}$ through the upper
half-plane to $q_i$. ([[def-elementary-geometric-half-twist]].)

[F3] *Standard meridians and their freedom of radius.* The stems
$s_j$ are the straight segments from $d=(0,1)$ to the points $q_j$ of the standard-meridian definition; the loops
$x_j=s_jc_js_j^{-1}$ are based at $d$, and the class $[x_j]$ is independent of
the admissible radius of the circle $C_j$; the assignment $x_j\mapsto[x_j]$ is
an isomorphism $F_n\to\pi_1(X,d)$
([[def-standard-meridians-of-a-punctured-disk]],
[[thm-the-punctured-disk-fundamental-group-is-free-on-standard-meridians]]).

[F4] *Functoriality of the induced map.* A pointed continuous map induces a
group homomorphism on $\pi_1$, homotopic pointed maps induce the same
homomorphism, $\operatorname{id}_*=\operatorname{id}$, and
$(g\circ f)_*=g_*\circ f_*$; hence the operation $[f]\mapsto f_*$ is a
well-defined group homomorphism from the mapping class group of boundary-fixed
homeomorphisms to $\operatorname{Aut}(\pi_1(X,d))$
([[thm-induced-fundamental-group-map-functoriality]]).

[F5] *The Artin representation.* $\rho:B_n\to\operatorname{Aut}(F_n)$ is the
unique group homomorphism with
$$\rho(\sigma_i)(x_i)=x_ix_{i+1}x_i^{-1},\qquad \rho(\sigma_i)(x_{i+1})=x_i, \qquad \rho(\sigma_i)(x_j)=x_j\ (j\notin\{i,i+1\}),$$
and $B_n$ is generated by $\sigma_1,\dots,\sigma_{n-1}$
([[def-the-artin-representation-on-a-free-group]],
[[def-artin-automorphisms-of-the-free-group]]).

[F6] *A convenient slit system for reading loops.* Use the vertical downward
segments $\ell_j$ from $q_j$ to the lower outer boundary, instead of the
standard upper tethers. Their interiors are pairwise disjoint, and every
standard truncated tether avoids them. Remove small puncture disks and open
along the remaining parts of these downward segments. The thin-strip disk
construction of [[lem-the-standard-stem-system-cuts-the-punctured-disk-open-to-a-disk]]
applies to these disjoint straight cuts as well: it gives a compact disk,
with each removed circle opened into a boundary arc. A transverse based loop
is therefore read by its signed slit crossings. To justify the rule, split
it at the crossings and contract each intervening path in that disk; gluing
back one paired side gives its standard lasso, reached from $d$ above the
cuts. A crossing from left to right over the downward slit is positive,
since a positive small meridian crosses it in that direction. Thus it
contributes $x_j$, and the opposite crossing contributes $x_j^{-1}$.
All loop segments remain in the holed disk; no puncture tip is traversed.

[F7] The boundary class equals $x_1\cdots x_n$
([[lem-the-oriented-boundary-loop-represents-the-ordered-product-of-the-standard-meridians]]).
A boundary-fixed homeomorphism fixes that class. In the published half-rotation
formula of [F1], $H_i$ is $(r,\theta)\mapsto(r,\theta+\pi\chi(r))$
about $m_i$, with $0\le\chi\le1$, $\chi=1$ for $r\le5h/4$, and
$\chi=0$ for $r\ge11h/8$.
## Proof

1.1 *The induced action is a homomorphism on braids.* By [F1] the composite $\Psi\circ\varphi_n:B_n\to\operatorname{Mod}(D^2,Q_n;\partial D^2)$ is a group homomorphism, and by [F4] the assignment $[f]\mapsto f_*$ is a group homomorphism to $\operatorname{Aut}(\pi_1(X,d))$, which under the identification of [F3] is $\operatorname{Aut}(F_n)$. Hence $\Theta:\beta\longmapsto\text{(the automorphism induced by }\Psi(\varphi_n(\beta))\text{)}$ is a group homomorphism $B_n\to\operatorname{Aut}(F_n)$. [F1, F3, F4]

1.2 *Reduction to the half twists.* By [F5] $B_n$ is generated by $\sigma_1,\dots,\sigma_{n-1}$ and $\rho$ is the unique homomorphism carrying $\sigma_i$ to the displayed substitution; two homomorphisms from the presented group $B_n$ that agree on all generators agree on $B_n$. It therefore suffices to prove $(H_i)_*=\rho(\sigma_i)$ for every $i$, where $(H_i)_*$ is the automorphism of $F_n$ induced by the homeomorphism $H_i$ of [F1]. [F1, F5]

1.3 *The transported right tether avoids every other downward slit.* Write the right stem as $z(t)=(1-t)d+tq_{i+1}$ and put $y=1-t$. Whenever it meets $U_i$, $0<y<3h/2$. Its horizontal coordinate relative to $m_i$ is $h-yq_{i+1}>h-(3h/2)(1/4)=5h/8>0$, since $|q_{i+1}|<1/4$. Thus its polar angle about $m_i$ satisfies $0<\theta<\pi/2$. Under $H_i$, its angle becomes $\Theta=\theta+\pi\chi(r)$, so $0<\Theta<3\pi/2$. The downward slit from $q_{i+1}=m_i+(h,0)$ could be crossed only at a point with horizontal coordinate $h$ relative to $m_i$ and negative vertical coordinate; that would require an angle in $(3\pi/2,2\pi)$, impossible in this range. Every other slit except $\ell_i$ has horizontal distance at least $3h$ from $m_i$ and avoids $U_i$. Outside $U_i$ the stem stays above the real axis and is unchanged. Hence the transported right tether can cross only $\ell_i$. This argument uses actual truncated tethers ending at a small circle, so no concatenation passes through a deleted puncture. [F1, F2, F6, F7, construct]

2.1 *Every meridian with $j\notin\{i,i+1\}$ is fixed.* The $x$-coordinates of $m_i$ and $q_j$ differ by $|2(i-j)+1|\,h\ge3h$, and $|x(q_j)|<1/4$; hence the distance from $m_i$ to the line through $d$ and $q_j$, namely $|x(m_i)-x(q_j)|/\sqrt{1+x(q_j)^2}$, exceeds $3h\cdot 4/\sqrt{17}>3h/2$, so the stem $s_j$ avoids the open support disc $U_i$ and $\operatorname{dist}(q_j,U_i)\ge3h-3h/2=3h/2>0$. Choose, by the radius independence of [F3], a lasso $x_j'$ homotopic rel $d$ to $x_j$ whose circle has radius less than $3h/2$ around $q_j$; then $x_j'$ avoids $U_i$, and since $H_i$ is the identity outside $U_i$ by [F1], $H_i\circ x_j'=x_j'$ pointwise. Hence $(H_i)_*[x_j]=[x_j]=\rho(\sigma_i)(x_j)$. [F1, F3, step 1.2]

3.1 *The right meridian and then the left meridian.* Choose the circle for $x_{i+1}$ sufficiently small to lie wholly in the core $r<5h/4$. It maps under $H_i$ to a positive round circle about $q_i$, and crosses $\ell_i$ once positively and no other downward slit. By step 1.3 the preceding tether has a crossing word $x_i^m$ for some integer $m$, after a small general-position perturbation supported away from the other slits. Its returning tether gives $x_i^{-m}$. [F6] therefore reads the actual based loop $H_i\circ x_{i+1}$ as $x_i^m x_i x_i^{-m}=x_i$. The other meridians are fixed by step 2.1, and [F7] says the whole ordered product is fixed. Cancelling its unchanged prefix and suffix gives $(H_i)_*(x_i)(H_i)_*(x_{i+1})=x_i x_{i+1}$. Substitution of $(H_i)_*(x_{i+1})=x_i$ yields $(H_i)_*(x_i)=x_i x_{i+1}x_i^{-1}$. These are exactly the formulas of [F5]. [F3, F5, F6, F7, step 2.1, step 1.3, algebra]

4.1 *Comparison and conclusion.* Steps 2.1 and 3.1 show $(H_i)_*(x_j)= \rho(\sigma_i)(x_j)$ for every $j$ and every $i$, and two endomorphisms agreeing on the free basis $x_1,\dots,x_n$ agree as automorphisms; hence $(H_i)_*=\rho(\sigma_i)$. By step 1.2 the homomorphism $\Theta$ of step 1.1 and the Artin representation $\rho$ agree on the generators of $B_n$, so $\Theta(\beta)=\rho(\beta)$ for every braid word $\beta$, which is the first assertion; the case $\beta=\sigma_i$ is the second. AC is used through the published isomorphism and half-twist identification of [F1] and the slit-disk construction of [F6]. [F1, F5, step 1.1, step 1.2, step 2.1, step 1.3, step 3.1] ∎

## Remarks

- The proposition is the point where the algebraic convention of
  [[def-artin-automorphisms-of-the-free-group]] is matched to the frozen
  geometric conventions of this library: the positive (anticlockwise) half
  twist induces the substitution
  $x_i\mapsto x_ix_{i+1}x_i^{-1}$, $x_{i+1}\mapsto x_i$, which is Artin's
  substitution with the letter and its inverse interchanged. The mirror
  (clockwise) half rotation realizes Artin's original formulas verbatim.
- The read-off in steps 2.1, 3.1 and 4.1 uses only the support disc and the stems; it
  shows at the same time that the induced action fixes $x_1\cdots x_n$, as it
  must, since $H_i$ fixes $\partial D^2$ pointwise.
