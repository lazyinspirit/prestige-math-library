---
id: rem-banach-zarecki
kind: remark
title: "Banach-Zarecki theorem"
status: published
origin: session
proved_here: false
deps: [rem-absolutely-continuous-function]
justified_by: []
forward_refs: []
aliases: [rem-banach-zaretsky]
landmark: false
short: "AC = continuous + bounded variation + Luzin's property (N)"
verification:
  precheck: n/a
  sources_checked:
    date: 2026-07-26
    scope: citations
    by: session-audit
sources:
  scraped: []
  references:
    - title: "Luzin N property (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Luzin_N_property"
    - title: "C. Heil, Absolute continuity and the Banach-Zaretsky theorem"
      url: "https://heil.math.gatech.edu/papers/abscont_typosmarked.pdf"
    - title: "A. Mahdipour-Shirayeh and H. Eshraghi, A new proof for the Banach-Zarecki theorem (arXiv:1206.2602)"
      url: "https://arxiv.org/abs/1206.2602"
pipeline_run: null
---

## Statement

Let $F : [a,b] \to \mathbb{R}$. Then $F$ is absolutely continuous on $[a,b]$ if
and only if all three of the following hold:

1. $F$ is continuous on $[a,b]$;
2. $F$ is of bounded variation on $[a,b]$;
3. $F$ has **Luzin's property (N)**: $\lambda(F(E)) = 0$ for every
   $E \subseteq [a,b]$ with $\lambda(E) = 0$.

None of the three may be dropped. The Cantor function satisfies 1 and 2 and
fails 3, since it maps the Cantor set, a null set, onto $[0,1]$. The function
$x \mapsto x \sin(1/x)$ on $(0,1]$ extended by $0$ satisfies 1 and 3 and fails
2. A jump function satisfies 2 and 3 and fails 1.

## Remarks

**Not proved in this library.** It is recorded with citations and used in no
proof here.

**What would prove it.** The forward direction is a covering estimate directly
from the definition of absolute continuity
([[rem-absolutely-continuous-function]]). The converse uses the Vitali covering
theorem ([[rem-vitali-covering-theorem]]) together with the Banach indicatrix
formula, which expresses the total variation of a continuous function as the
integral over $\mathbb{R}$ of the number of preimages, and hence needs the
Lebesgue integral ([[rem-lebesgue-measure-and-integral]]).

**Which page it serves.** The bounded variation and Riemann-Stieltjes page. That
page has both the continuity and the bounded variation hypotheses available
as proved notions, and property (N) can be stated with the elementary covering
notion of a null set, so the statement is fully intelligible there. Only the
proof is out of reach.

**Why it is worth recording even unproved.** It is the answer to the question
that the sharp fundamental theorem of calculus
([[rem-ftc-absolutely-continuous]]) leaves open, namely what absolute continuity
is intrinsically, with no integral in sight. The pair of statements together
explains the Cantor function completely: it fails Newton-Leibniz because it fails
property (N), and it fails property (N) because it moves a null set onto a set of
full measure.
