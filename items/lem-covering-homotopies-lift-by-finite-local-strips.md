---
id: "lem-covering-homotopies-lift-by-finite-local-strips"
kind: "lemma"
title: "Covering homotopies lift by finite local strips"
deps: ["def-covering-map-and-evenly-covered-neighbourhoods", "lem-tube-lemma-for-a-compact-factor", "cor-heine-borel-in-the-product-topology", "lem-continuity-is-local-and-pastes", "def-hurewicz-and-serre-fibrations", "thm-connected-subsets-of-r-are-intervals"]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: "May, A Concise Course in Algebraic Topology"
      url: "https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf"
      locator: "Chapter7 pp49–56; Chapter9 §3 p66 and §5 pp68–69"
    - title: "Hatcher, Algebraic Topology"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
      locator: "§4.2 Theorem4.41 pp375–377; Hopf example pp377–378; §4.3 pp405–410"
status: published
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

Every covering map $p:E\to B$ has unique homotopy lifting for every ordinary parameter space $X$, with a prescribed initial lift. In particular it is a Hurewicz fibration; if all spaces are CGWH the same assertion holds in that convention. No AC is used.

## Facts & Assumptions

[F1] An evenly covered open set has inverse-image sheets on each of which the covering is a homeomorphism. [[def-covering-map-and-evenly-covered-neighbourhoods]]

[F2] A compact time track in an open set has a uniform parameter neighbourhood. [[lem-tube-lemma-for-a-compact-factor]]

[F3] Closed real intervals are compact. [[cor-heine-borel-in-the-product-topology]]

[F4] Finite closed pasting and open-cover locality preserve continuity. [[lem-continuity-is-local-and-pastes]]

[F5] HLP quantifies over the entire parameter space with its exact initial map. [[def-hurewicz-and-serre-fibrations]]

[F6] A real order-convex interval is connected. [[thm-connected-subsets-of-r-are-intervals]]

## Proof

**Given:** A covering $p$, continuous $H:X\times I\to B$, and continuous $f:X\to E$ with $pf=H(-,0)$.

1.1 For a single path, pull back all evenly covered opens to $I$. A finite subdivision has each closed segment in one such inverse image: take the family of all relative intervals whose doubled radius remains in a cover member, extract finitely many smaller intervals covering $I$ by F3, and subdivide into lengths below the minimum chosen radius. Each segment meeting a smaller interval at its first point then lies in the corresponding doubled interval. Starting in a prescribed sheet, use its inverse homeomorphism on the first segment; its endpoint determines the sheet on the next. F4 pastes the finitely many path pieces. Only finite existential choices occur. [F1, F3, F4]

1.2 Two lifts of one path agreeing at a time agree on a neighbourhood of that time: choose an evenly covered neighbourhood and small time interval in which both lifts stay in their common sheet; its injectivity forces equality. If they differ at a time, take an evenly covered neighbourhood and small time interval in which their values stay in distinct sheets; they remain different. Thus the equality set and its complement are relatively open in $I$. The interval is connected (equivalently, its intermediate value property forbids a nonconstant continuous map to a discrete two-point space), so lifts agreeing initially agree everywhere by F6. Constant paths consequently have only constant lifts. [F1, F6]

2.1 Steps 1.1–1.2 define a unique pointwise lift $L(x,t)$ of each path $H(x,-)$ starting at $f(x)$. Unique specification defines this function without choosing a family of representatives. Fix $x_0$. Choose one finite subdivision and covering opens as in step 1.1 for $H(x_0,-)$. By F2, for each closed segment there is a neighbourhood of $x_0$ on which the full segment image stays in its chosen covering open; intersect the finitely many neighbourhoods. Shrink further so that $f(x)$ stays in the first sheet occupied by $f(x_0)$. The first inverse-chart formula is continuous on this neighbourhood times the first segment. Its terminal value is continuous in $x$; shrink again so that this value stays in the required sheet for the second segment. Continue finitely many times, obtaining one neighbourhood $N$ of $x_0$ on which all formulas are defined continuously and agree at their seams. [F1, F2, F4, step 1.1, step 1.2]

3.1 Pasting on the finite closed strips $N\times[t_{j-1},t_j]$ makes the local lift continuous. By step 1.2 it equals the uniquely specified $L$ on each vertical path. These neighbourhoods $N$ cover $X$, so F4 gives global continuity of $L$. Its defining equations are $L(x,0)=f(x)$ and $pL(x,t)=H(x,t)$. Uniqueness follows from step 1.2 on each path. This is F5, not just pointwise lifting. [F4, F5, step 1.2, step 2.1]

4.1 Empty $X$ gives the unique empty lift. A one-point parameter is step 1.1, and a constant path is covered by step 1.2. The subdivision includes time zero and one, and its seam values are precisely the initial conditions for the next segment. All global pointwise assignments were unique and every local subdivision involved only finite choices, so no AC is hidden. For CGWH test spaces the ordinary interval product is its cylinder, so the same lift works there. [F5, step 1.1, step 1.2, step 3.1] ∎
