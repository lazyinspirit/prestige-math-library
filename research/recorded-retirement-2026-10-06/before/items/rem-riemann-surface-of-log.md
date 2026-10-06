---
id: rem-riemann-surface-of-log
kind: remark
title: "The Riemann surface of the logarithm"
status: draft
origin: session
proved_here: false
deps: [rem-covering-spaces-and-universal-cover]
justified_by: []
forward_refs: []
aliases: []
landmark: false
short: "exp is the universal cover of the punctured plane; the non-existence of a continuous logarithm is in scope"
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Complex logarithm (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Complex_logarithm"
    - title: "Riemann surface (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Riemann_surface"
    - title: "O. Forster, Lectures on Riemann Surfaces, GTM 81 (Springer)"
      url: "https://link.springer.com/book/10.1007/978-1-4612-5961-9"
    - title: "Riemann surface (nLab)"
      url: "https://ncatlab.org/nlab/show/Riemann+surface"
pipeline_run: null
---

## Statement

The complex exponential $\exp \colon \mathbb{C} \to \mathbb{C} \setminus \{0\}$ is
a holomorphic covering map, $\mathbb{C}$ is simply connected, and therefore
$\exp$ is the **universal covering** of the punctured plane. The covering space
$\mathbb{C}$, presented together with the projection $\exp$ and the tautological
function $\ell(w) = w$ satisfying $\exp(\ell(w)) = \exp(w)$, is what is called the
**Riemann surface of the logarithm**: the connected Riemann surface on which the
logarithm becomes a single-valued holomorphic function.

Its structural consequences, all deferred:

* the deck group of $\exp$ is $2\pi i \mathbb{Z}$ acting by
  $w \mapsto w + 2\pi i n$, and $\pi_1(\mathbb{C} \setminus \{0\}) \cong
  \mathbb{Z}$;
* a **branch** of the logarithm on an open $U \subseteq \mathbb{C} \setminus
  \{0\}$ is exactly a continuous section of $\exp$ over $U$, so branches
  correspond to lifts, and the ambiguity between two branches on a connected $U$
  is a constant in $2\pi i \mathbb{Z}$;
* the monodromy of analytic continuation of the logarithm around a loop is the
  action of the class of that loop in $\pi_1$ on the fibre, which is why
  continuing $\log$ once around the origin returns it shifted by $2\pi i$.

## Remarks

**What is in scope, and is not deferred.** The elementary negative statement:
there is **no** continuous function $f \colon \mathbb{C} \setminus \{0\} \to
\mathbb{C}$ with $\exp(f(z)) = z$ for all $z \neq 0$. That is provable here from
the winding-number obstruction, constructed by hand as in
[[rem-pi1-circle-is-z]]: such an $f$ would give a continuous argument along the
unit circle, whose total increment around the circle is forced to be $2\pi$ by
the construction and $0$ by continuity of $f$ at the closing point. Also in scope
are the existence of a holomorphic branch of $\log$ on any half plane or slit
plane, by explicit formula, and the local inversion of $\exp$.

**Not proved in this library.** That $\exp$ is a covering map in the technical
sense, that $\mathbb{C}$ with $\exp$ is the universal cover, the identification of
the deck group, the correspondence between branches and lifts, and the monodromy
description of analytic continuation.

**What would prove it.** [[rem-covering-spaces-and-universal-cover]] applied to
$\exp$, plus the elements of Riemann surface theory: charts, holomorphic maps
between surfaces, and analytic continuation along paths.

**Why it matters here.** The library needs the logarithm and its branches for
complex analysis, and it can obtain every branch it uses by explicit formula on
an explicitly slit region. What it cannot say is that the branches are the sheets
of one connected surface, or that the obstruction to gluing them is a fundamental
group. The multivaluedness is handled by choosing a region, never by choosing a
sheet.
