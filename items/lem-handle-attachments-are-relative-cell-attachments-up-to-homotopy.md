---
id: lem-handle-attachments-are-relative-cell-attachments-up-to-homotopy
kind: lemma
title: "Handle attachments are relative cell attachments up to homotopy"
status: draft
origin: pipeline
dependency_level: 0
deps: [def-attaching-a-smooth-handle-with-corner-rounding, def-k-handle-core-cocore-attaching-region-and-belt-sphere, def-cell-attachment-by-a-characteristic-map, def-cofibration-and-homotopy-extension-property, thm-collar-neighborhood-theorem]
justified_by: []
provenance:
  statement: literature-derived
  proof: literature-derived
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "C. T. C. Wall, Differential Topology (Cambridge Studies in Advanced Mathematics 156), Sections 5.1-5.4, printed pp. 129-148"
      url: "https://www.math.auckland.ac.nz/~hekmati/Books/Wall.pdf"
    - title: "Andrei Pajitnov, Circle-Valued Morse Theory (de Gruyter Studies in Mathematics 32), Chapter 5 Sections 1-3 (pp. 163-189) and Chapter 4 Section 3 (pp. 132-162)"
      url: "https://www.maths.ed.ac.uk/~v1ranick/papers/pajbook.pdf"
proof_strategy: "explicit handle retraction and homotopy inverses"
---

## Statement

Let $N$ be a smooth $n$-manifold with boundary, let $k$ be an integer with
$0\le k\le n$, and let $N'=N\cup_f h^k$ be obtained from $N$ by attaching a
rounded $k$-handle along a smooth embedding
$f:S^{k-1}\times D^{n-k}\to\partial N$. Then the pair $(N',N)$ is homotopy
equivalent, relative to $N$, to the pair obtained from $N$ by attaching one
$k$-cell along the core embedding $f_0=f|_{S^{k-1}\times\{0\}}$; equivalently,
the map $(N',N)\to(N\cup_{f_0}D^k,N)$ induced by collapsing the handle on its
core is a homotopy equivalence of pairs, with homotopy inverse the inclusion of
the cell as the core.

## Facts & Assumptions

[F1] [[def-attaching-a-smooth-handle-with-corner-rounding]]: Assume $\mathrm{AC}_\omega$. Let $X$ be a smooth $n$-manifold with boundary, and let $k$ be an integer with $0\leq k\leq n$. Attach the handle of [[def-k-handle-core-cocore-attaching-region-and-belt-sphere]] by a smooth embedding $h:S^{k-1}\times D^{n-k}\to\partial X$ that extends to a neighborhood of the disk factor. Form the quotient of $X\sqcup(D^k\times D^{n-k})$ identifying $z$ with $h(z)$ in the attaching region. The disk coordinates trivialize the normal bundle of the attaching sphere; this framing is part of the data. Use collars from [[thm-collar-neighborhood-theorem]] to give the seam its product smooth charts, then round the compact codimension-two corner. There is no corner to round when $k=0$ or $k=n$.

[F2] [[def-k-handle-core-cocore-attaching-region-and-belt-sphere]]: For integers $0\le k\le n$, the standard $n$-dimensional $k$-handle is $D^k\times D^{n-k}$. Its core is $D^k\times\{0\}$, its cocore is $\{0\}\times D^{n-k}$, its attaching region is $S^{k-1}\times D^{n-k}$, and its attaching sphere is $S^{k-1}\times\{0\}$. The outgoing region is $D^k\times S^{n-k-1}$ and the belt sphere is $\{0\}\times S^{n-k-1}$. Here $D^j$ is the closed unit disk, $D^0$ is a point, and $S^{-1}=\varnothing$.

[F3] [[def-cell-attachment-by-a-characteristic-map]]: For a space $X$, an attaching map $f:S^{n-1}\to X$, and $n\geq1$, attach an $n$-cell by the pushout $X\cup_fD^n=(X\sqcup D^n)/(z\sim f(z)$ for $z\in S^{n-1})$. The quotient map restricted to $D^n$ is its characteristic map; its image is the closed cell and the image of $\mathring D^n$ is the open cell. For $n=0$, use $S^{-1}=\varnothing$, so $X\cup_fD^0=X\sqcup\{*\}$.

[F4] [[def-cofibration-and-homotopy-extension-property]]: A continuous map $i:A\to X$ has the **homotopy extension property** (HEP), or is an **unbased cofibration**, if for every target $Z$, continuous $f:X\to Z$, and continuous $h:A\times I\to Z$ satisfying $h(a,0)=f(i(a))$, there is a continuous $H:X\times I\to Z$ with $H(x,0)=f(x)$ and $H(i(a),t)=h(a,t)$. No uniqueness is required.

[A1] **Handle retraction.** There is a continuous homotopy $H_t:D^k\times D^{n-k}\to D^k\times D^{n-k}$, $t\in[0,1]$, with $H_0=\mathrm{id}$, $H_t$ the identity on the attaching region $S^{k-1}\times D^{n-k}$ for every $t$, and $H_1$ mapping onto $(S^{k-1}\times D^{n-k})\cup(D^k\times\{0\})$. Explicitly, with $r=|u|$, let $\eta(r):=\min(2r,1)$ and $\chi$ continuous with $\chi(r)=0$ for $r\le1/2$, $\chi(r)=1$ for $r\ge3/4$ and $0\le\chi\le1$, and put $H_t(u,v):=(u\,\nu_t(r)/r,\ v\,\psi_t(r))$ with $\nu_t(r):=(1-t)r+t\,\eta(r)$ and $\psi_t(r):=(1-t)+t\,\chi(r)$, the ratio at $u=0$ read as $\nu_t(r)/r\le2$. Then $u\,\nu_t(r)/r$ has norm $(1-t)r+t\eta(r)\le1$, so $H_t$ takes values in the handle and is continuous; for $r=1$ one has $\eta(1)=1=\chi(1)$, so $H_t(u,v)=(u,v)$ and $H_t$ is the identity on the attaching region. At $t=1$ the first coordinate $u\,\eta(r)/r$ has norm $\eta(r)$, which equals $2r\in[0,1]$ for $r\le1/2$ and $1$ for $r\ge1/2$, and the second coordinate $v\,\chi(r)$ vanishes for $r\le1/2$; hence the image lies in the union, the values with $r\le1/2$ cover $D^k\times\{0\}$ and the values with $r\ge3/4$ cover $S^{k-1}\times D^{n-k}$. This is Wall's handle retraction.

## Proof

**Given:** The objects and hypotheses in the statement.

1.1 Write $h^k=D^k\times D^{n-k}$ for the handle and $N'=N\cup_f h^k$ for the rounded attachment, so that the attaching region $S^{k-1}\times D^{n-k}$ is identified with its image under $f$ in $\partial N$ and the core $D^k\times\{0\}$ is attached to $\partial N$ along the sphere $f_0(S^{k-1}\times\{0\})=f(S^{k-1}\times\{0\})$. Let $q:N'\to N\cup_{f_0}D^k$ be the map that is the identity on $N$ and carries the handle by $H_1$ of [A1], and let $i:N\cup_{f_0}D^k\to N'$ be the identity on $N$ and the characteristic map of the cell onto the core. Both are well defined and continuous: $H_1$ is the identity on the attaching region, which is glued to $N$, and the cell is attached by exactly the restriction of $f$ to the core sphere. [F1, F2, F3, A1, construct]

2.1 The composite $q\circ i$ is homotopic to the identity of $N\cup_{f_0}D^k$ relative to $N$. On $N$ it is the identity; on the cell it is the radial map $x\mapsto x\,\nu_1(|x|)/|x|$, which fixes the boundary sphere $S^{k-1}$ and is homotopic to the identity of $D^k$ relative to $S^{k-1}$ through $x\mapsto x\,((1-s)+s\,\nu_1(|x|)/|x|)$. Gluing this cell-fixing homotopy with the constant homotopy on $N$ gives the claim. [F3, A1, step 1.1, algebra]

2.2 The composite $i\circ q$ is homotopic to the identity of $N'$ relative to $N$. On $N$ it is the identity and off the handle it is unchanged, while on the handle it is given by $H_1$; the homotopy $H_t$ of [A1] glues with the constant homotopy on $N$ because $H_t$ is the identity on the attaching region for every $t$. Corner rounding is a diffeomorphism supported in a collar of the seam and does not affect this homotopy. [F1, A1, step 1.1, algebra]

3.1 Steps 2.1 and 2.2 exhibit $q$ and $i$ as homotopy inverses of pairs relative to $N$; in particular $(N',N)$ is homotopy equivalent, relative to $N$, to $(N\cup_{f_0}D^k,N)$, and $q$ induces a homotopy equivalence of pairs. The homotopy extension property of the cell inclusion is not needed for these explicit homotopies, which are already defined on the whole space and fixed on $N$. The endpoint cases are included: for $k=0$ the handle is the $n$-disk and the cell is a point, so the attaching region is empty and the radial contraction of the disk to its centre realizes the homotopy; for $k=n$ the attaching region is all of $S^{n-1}$ and the core is the whole disk $D^n$, and the radial homotopy of [A1] fixes its boundary sphere. [F1, F2, F4, step 2.1, step 2.2, algebra] ∎
