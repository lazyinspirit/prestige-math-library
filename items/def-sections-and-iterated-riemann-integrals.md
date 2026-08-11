---
id: def-sections-and-iterated-riemann-integrals
kind: definition
title: "Sections, lower and upper section integrals, and iterated Riemann integrals on product rectangles and Jordan sets"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-multidimensional-rectangle-and-volume, def-multidimensional-darboux-integral, def-riemann-integral-over-a-jordan-set]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  audited: 2026-08-11
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis II, §10.2"
      url: "https://www.jirka.org/ra/realanal2.pdf"
    - title: "A. Leibman, Multidimensional Real Analysis, §5.4"
      url: "https://people.math.osu.edu/leibman.1/analysis2/m-analysis.pdf"
pipeline_run: null
---

## Definition

Let $p,q\ge1$, let $A\subseteq\mathbb R^p$ and $B\subseteq\mathbb R^q$ be nondegenerate closed rectangles, and let $f:A\times B\to\mathbb R$ be bounded. For $x\in A$ and $y\in B$, the **sections** of $f$ are
$$f_x:B\to\mathbb R,\quad f_x(y):=f(x,y),\qquad f^y:A\to\mathbb R,\quad f^y(x):=f(x,y).$$
Their lower and upper section integrals are the everywhere-defined bounded functions
$$\ell_B(x):=\underline{\int_B}f_x,\quad u_B(x):=\overline{\int_B}f_x,\qquad \ell_A(y):=\underline{\int_A}f^y,\quad u_A(y):=\overline{\int_A}f^y,$$
using [[def-multidimensional-darboux-integral]]. They are defined even when the corresponding section is not Riemann integrable, and always satisfy $\ell_B\le u_B$ and $\ell_A\le u_A$.

If every $f_x$ is integrable and the function $x\mapsto\int_B f_x$ is integrable on $A$, define the **ordinary iterated integral in the $B$-then-$A$ order** by
$$\int_A\left(\int_B f(x,y)\,dy\right)dx:=\int_A\left(x\mapsto\int_B f_x\right).$$
The other order is defined symmetrically. More generally, if the sections are integrable outside a content-zero set $N\subseteq A$, any bounded function $h:A\to\mathbb R$ satisfying $h(x)=\int_Bf_x$ for $x\notin N$ is an **exceptionally completed section-integral function**. Its integral, when it exists, is independent of its values on $N$.

Let now $E\subseteq\mathbb R^{p+q}$ be a bounded Jordan set and $g:E\to\mathbb R$ be bounded. Its section at $x\in\mathbb R^p$ is
$$E_x:=\{y\in\mathbb R^q:(x,y)\in E\},\qquad g_x:E_x\to\mathbb R,\quad g_x(y):=g(x,y).$$
Empty sections have integral $0$. For a nonempty Jordan section, $\int_{E_x}g_x$ means the Jordan-set integral of [[def-riemann-integral-over-a-jordan-set]]. Section integrals over a Jordan set and their iterated integrals are defined by first choosing factor rectangles with $E\subseteq A\times B$ and applying the preceding conventions to the zero extension of $g$. Independence of those rectangles is proved in [[thm-jordan-fubini-by-sections]].
