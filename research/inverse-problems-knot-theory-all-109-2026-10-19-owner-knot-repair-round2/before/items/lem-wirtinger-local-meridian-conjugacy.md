---
id: lem-wirtinger-local-meridian-conjugacy
kind: lemma
title: "Local meridian conjugacy at a Wirtinger crossing"
status: draft
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
verification: {precheck: pass}
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

1.1 Take ambient coordinates $(x,y,z)$ with overstrand tangent $+\partial_x$, viewing normal $+\partial_z$, and positive projection basis $(\partial_x,\partial_y)$. The source has $y<0$ and the target $y>0$. Place the understrand below the overstrand. Let $\alpha_s,\alpha_t$ be the upper-collar access paths to its two meridian disks and let $\beta$ run along the understrand from source to target, without reference to its orientation. In the normal $(y,z)$ plane of the overstrand, the loop $\alpha_s\beta\alpha_t^{-1}$ runs from above the overstrand down its negative-$y$ side, across below it, and back up its positive-$y$ side. Its winding is positive: the polygon with vertices $(0,H),(-d,-h),(d,-h)$ has positive signed area. Straightening these three paths inside the product crossing chart deforms it to one counterclockwise circuit, without crossing the origin. Hence its based class is $m_o$ and $\alpha_t$ is path-homotopic to $m_o^{-1}\alpha_s\beta$. This is the annular-core trace, including its sign. [given, F1, F2, construct]

2.1 Transport the oriented normal disk along the understrand from source to target. Its boundary loops $\mu_s,\mu_t$ satisfy $\beta\mu_t\beta^{-1}\simeq\mu_s$, since the orientation is transported continuously, even when $\beta$ goes against the knot orientation. Using the access-path identity gives $[\alpha_t\mu_t\alpha_t^{-1}]=m_o^{-1}[\alpha_s\beta\mu_t\beta^{-1}\alpha_s^{-1}]m_o=m_o^{-1}m_sm_o.$ Equivalently the annular-core word $m_o^{-1}m_s m_o m_t^{-1}$ bounds the cap disk of [F1], consistently with [F3]. If the understrand orientation is reversed, both its meridians are inverted, and the same equation follows by taking its inverse. Thus one must not switch the side-based conjugation direction merely because the understrand direction changes. [F1, F2, F3, step 1.1, algebra]

3.1 The under-tangent follows $n_o$ exactly when incoming is source and outgoing is target, giving the first incoming/outgoing equation. Otherwise solve the same equation for $m_s$ to obtain the second. A reversed meridian is the inverse loop by [F2]. If a common access path $\alpha$ is replaced by $\lambda\alpha$, the class $[\alpha\mu\alpha^{-1}]$ becomes $[\lambda][\alpha\mu\alpha^{-1}][\lambda]^{-1}$; this holds for each of the three meridians. These observations prove all remaining assertions. [F2, step 2.1, algebra] ∎
