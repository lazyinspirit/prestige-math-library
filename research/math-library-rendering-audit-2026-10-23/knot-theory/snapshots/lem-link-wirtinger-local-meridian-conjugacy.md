---
id: lem-link-wirtinger-local-meridian-conjugacy
kind: lemma
title: Local meridian conjugacy at a labeled link crossing
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 3
deps:
  - def-regular-oriented-link-diagram
  - thm-euclidean-inverse-function-theorem
  - def-oriented-link-in-s-three-and-ambient-isotopy
  - def-based-string-link-and-labeled-link-peripheral-system
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Stefan Friedl, Knot Theory, §5.3, proof of the Wirtinger Presentation Proposition
      url: https://friedl.app.uni-regensburg.de/papers/2024_knot-theory-final.pdf
      locator: Claim 1a and the local crossing charts, printed pp. 69–70, PDF pp. 70–71
    - title: Cole Charbonneau, Computing the Wirtinger Presentation of a Knot Group from a Knot Diagram
      url: https://site.uvm.edu/cmcharbo/files/2021/12/knot-group-1.pdf
      locator: §§2–3, local meridian-conjugacy construction; knot case only
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
---

## Statement

Let $D$ be a finite oriented diagram of a nonempty labeled closed link or string link, with a chosen smooth realization and pairwise-disjoint product tubes. Choose a crossing whose two projected branches meet transversely and for which no other branch meets a sufficiently small neighborhood, and let $o$ be the over-strand. Orient the projection plane by the rule that $(v_1,v_2)$ is positive exactly when $(n,v_1,v_2)$ is positive in the ambient three-space, where $n$ is the viewing normal. Let $n_o$ be the positive in-plane normal characterized by $(v_o,n_o)$ being positive. The source side $s$ is the side from which $n_o$ points, and the target side $t$ is the side toward which it points.

Choose an orientation-preserving local crossing chart, whose existence follows from the transversality of the projected branches, in which the over-branch is $(x,0,0)$ oriented by $+\partial_x$, the under-branch is $(0,y,-h)$ for some $h>0$, the viewing normal is $+\partial_z$, and $(\partial_x,\partial_y)$ is the positive projection orientation. Use or radially shrink the chosen product tube near the under-branch to a radius $r$ with $0<r<h$. Choose $d,H>0$ small enough that the chart contains the points below. The source and target points on the upper boundary of the under-tube are $(0,-d,-h+r)$ and $(0,d,-h+r)$; join them by $\beta(y)=(0,y,-h+r)$ for $-d\le y\le d$. Choose a common basepoint in the chosen exterior above the chart and a path $\delta$ in the chosen exterior from it to $(0,0,H)$. The two sides of the triangle in $x=0$ from $(0,0,H)$ to the endpoints of $\beta$, together with $\delta$, give the compatible common-upper-collar access paths to the source and target meridian circles; denote them by $a_s,a_t$. Let $a_o$ be $\delta$ followed by an access arc in the punctured triangle to a small positive meridian circle around the over-strand. The oriented outer boundary of the punctured triangle represents this same based meridian. Base the positive over-meridian by the oriented boundary of this triangle after deleting a small disk about its intersection with the over-strand. Write the resulting based positive meridians as $m_o,m_s,m_t$. The chart, tube, and compatible paths are part of the data. All displayed based loops are in the link or string-link complement group, identified with the group of the chosen compact exterior by radial retraction in the product tubes.

For these compatible accesses,
$$m_t=m_o^{-1}m_sm_o.$$
Equivalently, the crossing relator is $m_o^{-1}m_sm_om_t^{-1}=1$. Reversing the direction of the under-strand does not change this side-based equation.

For arbitrary access paths $a'_e$ to the same chosen meridian circles, let $a_e$ be the compatible access, $c_e=a'_ea_e^{-1}$, and $m'_e=c_em_ec_e^{-1}$, for $e=o,s,t$. The exact relation for the independently based meridians is
$$m'_t=c_tc_o^{-1}(m'_o)^{-1}c_oc_s^{-1}m'_sc_sc_o^{-1}m'_oc_oc_t^{-1}.$$
A common change of base path conjugates all displayed meridians simultaneously.

## Statement references

[Friedl, §5.3, Claim 1a](https://friedl.app.uni-regensburg.de/papers/2024_knot-theory-final.pdf)

[Charbonneau, §§2–3](https://site.uvm.edu/cmcharbo/files/2021/12/knot-group-1.pdf)

## Facts & Assumptions

**Given:** A finite regular oriented diagram and a smooth realization; the chosen pairwise-disjoint product tubes; an oriented crossing; its positive normal-disk meridians; and the common basepoint and compatible triangle accesses from the Statement.

[F1] At a regular crossing, the two projected branches are smooth and transverse; their oriented tangents determine local planar coordinates, and the chosen product tubes provide normal-disk meridians. [[def-regular-oriented-link-diagram]], [[def-based-string-link-and-labeled-link-peripheral-system]]

[F2] The positive meridian is the oriented boundary of a normal disk whose orientation is fixed by the link tangent followed by the disk orientation agreeing with the ambient orientation. [[def-based-string-link-and-labeled-link-peripheral-system]]

[F3] The ambient orientation and viewing normal determine the positive orientation of the crossing chart and hence the orientation of the normal $(y,z)$ plane to the over-strand. [[def-oriented-link-in-s-three-and-ambient-isotopy]], [[def-regular-oriented-link-diagram]]

[F4] A $C^1$ map between open subsets of $\mathbb R^2$ whose derivative is invertible at a point restricts near that point to a $C^1$ diffeomorphism. [[thm-euclidean-inverse-function-theorem]]

## Proof

1.1 Let the two projected branches be parametrized near the crossing by $\gamma_o(u)$ and $\gamma_s(v)$, with linearly independent derivatives at their common image $p$. The map $(u,v)\mapsto\gamma_o(u)+\gamma_s(v)-p$ has invertible derivative there, so the inverse function theorem gives local planar coordinates $x=u$, $y=v$. Choose the sign of $y$ so $(\partial_x,\partial_y)$ agrees with the oriented projection plane, and translate the crossing to $(0,0)$. Write the two height functions as $z=h_o(x)$ and $z=h_s(y)$, with $h_o(0)=0$ and $h_s(0)=-h<0$. The coordinate change $$z'=z-h_o(x)-h_s(y)+h_s(0)$$ has Jacobian determinant $1$; it carries the over-branch to $(x,0,0)$ and the under-branch to $(0,y,-h)$, while preserving the ambient orientation. Shrink the chart so it excludes every other branch, as permitted by the isolated-crossing hypothesis in the Statement. The normal-disk product chart for the under-branch supplies the chosen small radius $r<h$. Since $(\partial_x,\partial_y)$ is positively oriented, $n_o=+\partial_y$, so $y<0$ is the source and $y>0$ is the target. [F1, F3, F4, given, construct]

2.1 The triangle boundary is the loop from its apex to the source endpoint, along $\beta$ to the target endpoint, and back to the apex. Its interior lies above the under-tube boundary and meets the over-branch exactly at $(0,0,0)$. With the boundary orientation induced by $(\partial_y,\partial_z)$, its transverse intersection sign is positive because $(\partial_x,\partial_y,\partial_z)$ is a positive ambient basis. Removing a small disk about that intersection leaves an annulus in the crossing complement from the triangle boundary to a positive normal meridian of the over-strand. Conjugating by the common path $\delta$ therefore identifies $a_s\beta a_t^{-1}$ with the stated $m_o$. [F2, F3, step 1.1, given, construct]

3.1 The product tube around the under-branch carries its positive meridian circles along the branch by an annulus. The top arc $\beta$ is the path on that tube boundary joining the chosen source and target circle basepoints. If $\mu_s,\mu_t$ denote the meridian loops based at those points, the annulus gives $\mu_s=\beta\mu_t\beta^{-1}$. With the access paths $a_s,a_t$ of the Statement, it follows that $$m_s=(a_s\beta a_t^{-1})m_t(a_s\beta a_t^{-1})^{-1}.$$ The punctured-triangle argument in step 2.1 identifies $a_s\beta a_t^{-1}$ with $m_o$. Solving gives the asserted conjugation relation. [F2, step 1.1, step 2.1, given, construct, algebra]

4.1 Multiplying the conjugation equality by $m_t^{-1}$ gives the displayed crossing relator. Reversing the under-strand orientation reverses both under-meridian loops, so inverting the equality leaves the same side-based equation. [step 3.1, algebra]

4.2 For arbitrary access paths, $a'_e=c_ea_e$ gives $m'_e=c_em_ec_e^{-1}$. Substitute $m_o=c_o^{-1}m'_oc_o$ and $m_s=c_s^{-1}m'_sc_s$ into $m_t=m_o^{-1}m_sm_o$, then conjugate by $c_t$. This gives exactly the correction formula in the Statement; simultaneous base-path change conjugates all meridians by the same loop. [given, step 3.1, algebra]

5.1 On a chosen product tube with normal coordinate $v\ne0$, the homotopy $$v\longmapsto((1-s)|v|+s)\frac{v}{|v|},\qquad 0\le s\le1,$$ pushes the punctured tube radially to its boundary and fixes that boundary. Applying it on each disjoint tube and fixing the exterior identifies the based fundamental group of the open complement with that of the compact exterior. Thus the relation proved in the open complement is the same relation in the chosen exterior group. [given, F2, construct] ∎

## Remarks

The source/target labels determine which conjugation formula is used. Incoming/outgoing labels depend on the direction of the under-strand and should be derived from this equation, not substituted for it.

~~~tikz
\begin{tikzpicture}[>=stealth,line width=0.9pt]
  \draw[->,line width=1.2pt] (-1,-1)--(1,1);
  \draw[->] (1,-1)--(0.15,-0.15);
  \draw[->] (-0.15,0.15)--(-1,1);
  \node at (0.8,-0.7) {$s$};
  \node at (-0.8,0.8) {$t$};
  \node at (-0.8,-0.8) {$o$};
\end{tikzpicture}
~~~


The $x=0$ cross-section of the local chart shows the triangle access used in the proof. The symbol $\odot$ marks the over-strand in its positive $x$ direction.

~~~tikz
\begin{tikzpicture}[scale=1.0,>=stealth]
  \coordinate (apex) at (0,1.8);
  \coordinate (src) at (-1.35,-0.75);
  \coordinate (tgt) at (1.35,-0.75);
  \draw[->] (-1.9,-1.65) -- (1.9,-1.65) node[right] {$y$};
  \draw[->] (0,-1.8) -- (0,2.1) node[above] {$z$};
  \draw[gray,thick] (-1.7,-1.0) -- (1.7,-1.0) node[right] {$z=-h$};
  \draw[gray,dashed] (-1.7,-0.75) -- (1.7,-0.75) node[right] {$z=-h+r$};
  \draw[->,thick] (apex) -- (src) node[midway,left] {$a_s$};
  \draw[->,thick] (src) -- (tgt) node[midway,below] {$\beta$};
  \draw[->,thick] (tgt) -- (apex) node[midway,right] {$a_t^{-1}$};
  \fill (0,0) circle (2pt) node[right] {$\odot\,o$};
  \fill (apex) circle (1.5pt) node[above] {apex};
  \fill (src) circle (1.5pt) node[below left] {$s$};
  \fill (tgt) circle (1.5pt) node[below right] {$t$};
\end{tikzpicture}
~~~
