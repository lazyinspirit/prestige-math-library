---
id: lem-wirtinger-local-meridian-conjugacy
kind: lemma
title: "Local meridian conjugacy at a Wirtinger crossing"
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 2
deps: [def-knot-planar-code,
       lem-wirtinger-crossing-ball-cover,
       def-based-loops-and-fundamental-group,
       thm-fundamental-group-laws,
       thm-seifert-van-kampen,
       thm-group-pushout-as-an-amalgamated-quotient]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Danny Calegari, Introduction to Knot Theory, §4.2, printed pp. 34–36"
      url: "https://math.uchicago.edu/~dannyc/notes/knot_theory.pdf"
    - title: "John Stillwell, Classical Topology and Combinatorial Group Theory, §4.2.4"
      url: "https://homepages.math.uic.edu/~kauffman/Stillwell.pdf"
    - title: "Stefan Friedl, Knot Theory, §5.3, proof of the Wirtinger Presentation Proposition"
      url: "https://friedl.app.uni-regensburg.de/papers/2024_knot-theory-final.pdf"
verification:
  precheck: pass
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-10-22
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json.
    delegated_by: owner
---

## Statement

Orient the projection plane by the viewing normal and the ambient orientation. At an oriented crossing let $o$ be the over-arc, and let $n_o$ be its positive in-plane normal: the ordered pair consisting of the over-tangent and $n_o$ is positive. Call the under-side from which $n_o$ points the source $s$, and the side toward which it points the target $t$. A positive meridian is the oriented boundary of a small normal disk whose orientation, preceded by the oriented knot tangent, is the ambient orientation. With the common upper-collar basing paths, the based positive meridians satisfy
$$m_t=m_o^{-1}m_s m_o.$$
This side-based equation is independent of the direction of the understrand. In an oriented chart with over-tangent rightward, the target is the upper side $L$ and source the lower side $R$, so equivalently $m_R=m_o m_Lm_o^{-1}$. In incoming/outgoing notation, the outgoing under-meridian is $m_o^{-1}m_{\rm in}m_o$ if the under-tangent points along $n_o$, and is $m_om_{\rm in}m_o^{-1}$ otherwise. Reversing a chosen meridian loop inverts its class. Changing every common access path by the same based loop conjugates all three classes simultaneously.

## Statement references

[[def-knot-planar-code]].

[[lem-wirtinger-crossing-ball-cover]].

## Local crossing chart

In the unrotated coordinates used in the proof, a rightward overstrand has upward positive normal, so its lower side $R$ is the source and its upper side $L$ the target. The drawing rotates that chart; the source and target are marked directly.

```tikz
\begin{tikzpicture}[>=stealth,line width=0.9pt]
\draw[->] (1,-1)--(0.15,-0.15);
\draw[->] (-0.15,0.15)--(-1,1);
\draw[->,line width=1.3pt] (-1,-1)--(1,1);
\node at (0.85,-0.7) {$s$};
\node at (-0.8,0.8) {$t$};
\node at (-0.8,-0.8) {$o$};
\end{tikzpicture}
```

In this rotated chart the positive normal points northwest, from $s$ to $t$. The equations, rather than the drawing, fix the convention.

## Facts & Assumptions

**Given:** The oriented local crossing, the positive-meridian disk convention in the Statement, and common upper-collar access paths.

[F1] The crossing has the annular attachment and meridian-region paths of the crossing-ball construction. [[lem-wirtinger-crossing-ball-cover]]

[F2] Fundamental-group multiplication is represented by loop concatenation; inverse paths give inverses and homotopic based loops give the same element. [[def-based-loops-and-fundamental-group]], [[thm-fundamental-group-laws]]

[F3] Attaching the contractible crossing region kills the image of its annular core normally. [[thm-seifert-van-kampen]], [[thm-group-pushout-as-an-amalgamated-quotient]]

## Proof

1.1 Take ambient coordinates $(x,y,z)$ with overstrand tangent $+\partial_x$, viewing normal $+\partial_z$, and positive projection basis $(\partial_x,\partial_y)$. Source has $y<0$ and target $y>0$, with the understrand below the overstrand. Parameterize the under-core from source to target by $u$, whether or not this agrees with the knot orientation. Choose its product tube $\Phi(u,v)$ so that the oriented knot tangent followed by the ordered normal frame is ambient-positive; take the first normal-frame vector toward the positive-$z$ side of the understrand and the second to complete that orientation. Thus increasing angle from $\theta_0=0$ gives the positive meridian even when $u$ runs opposite to the knot orientation. Choose a small positive radius $r$. The path used here is the push-off $\beta(u)=\Phi(u,r(\cos\theta_0,\sin\theta_0))$, from source to target; it never lies on the knot core. The two meridian loops are the boundaries $\mu_u(\tau)=\Phi(u,r(\cos(\theta_0+2\pi\tau),\sin(\theta_0+2\pi\tau)))$, based at the endpoints of $\beta$. For exterior paths take $r$ at least the removed tube radius; shrink that radius first if necessary. Choose the product tube disjoint from the overstrand and other arc pieces, and $r$ smaller than the crossing-chart separation bounds. Choose upper-collar paths $\alpha_s,\alpha_t$ to these actual boundary points. In the normal $(y,z)$ plane of the overstrand, their concatenation $\alpha_s\beta\alpha_t^{-1}$ follows a small perturbation of the polygon $(0,H),(-d,-h),(d,-h),(0,H)$, which has positive signed area. The polygon and a sufficiently small surrounding strip avoid the origin; the chosen radius makes the perturbation lie in that strip, so its winding is still $+1$. For explicit complement control, straighten the local under-core to $x=0,z=-h$ in the product chart and take its upper push-off at $z=-h+r$. The access triangle is then entirely above $z=-h$, while the over-core projects to the origin. Radial interpolation of its positive polar-distance function to a sufficiently small circle about the origin stays inside that triangle minus the origin, hence above the under-core as well. Retain the positive-radius angular access in the under-tube until reaching these straightened paths. Thus the resulting homotopy is to one counterclockwise over-meridian and avoids both strands throughout. Thus all paths and homotopies lie in the complement, the loop represents $m_o$, and $\alpha_t\simeq m_o^{-1}\alpha_s\beta$ rel endpoints there. [given, F1, F2, construct]

2.1 The positive-radius cylinder $(u,\tau)\mapsto\Phi(u,r(\cos(\theta_0+2\pi\tau),\sin(\theta_0+2\pi\tau)))$ transports the boundary meridians, with its basepoint edge equal to $\beta$. Its image misses the knot core and, by the separated tube choice, the overstrand and every other arc. Reading the boundary of this cylinder gives $\beta\mu_t\beta^{-1}\simeq\mu_s$ in the complement; its disk orientation is transported continuously even when the source-to-target direction opposes the knot orientation. Therefore $[\alpha_t\mu_t\alpha_t^{-1}]=m_o^{-1}[\alpha_s\beta\mu_t\beta^{-1}\alpha_s^{-1}]m_o=m_o^{-1}m_sm_o$. Equivalently the annular-core word $m_o^{-1}m_sm_om_t^{-1}$ bounds the cap of [F1], consistently with [F3]. Reversing the understrand orientation inverts both its meridians, so inversion gives the same side-based equation, rather than a switch of the conjugating direction. [F1, F2, F3, step 1.1, algebra]

3.1 The under-tangent follows $n_o$ exactly when incoming is source and outgoing is target, giving the first incoming/outgoing equation. Otherwise solve the same equation for $m_s$ to obtain the second. A reversed meridian is the inverse loop by [F2]. If a common access path $\alpha$ is replaced by $\lambda\alpha$, the class $[\alpha\mu\alpha^{-1}]$ becomes $[\lambda][\alpha\mu\alpha^{-1}][\lambda]^{-1}$; this holds for each of the three meridians. These observations prove all remaining assertions. [F2, step 2.1, algebra] ∎
