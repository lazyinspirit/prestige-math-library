---
id: def-octonion-algebra-by-cayley-dickson
kind: definition
title: Real octonions by Cayley–Dickson doubling
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
page: jordan-spin-factor-and-alternative-algebras
dependency_level: 0
deps: [def-quaternions, def-vector-space]
justified_by: [thm-octonions-are-alternative-but-not-associative]
landmark: false
short: "$\\mathbb O$"
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "N. Jacobson, Lectures on Quadratic Jordan Algebras, §8"
      url: https://mathweb.tifr.res.in/Documents/Publications/Lectures/tifr45.pdf
    - title: "Holger P. Petersson, Albert Algebras, §§3.1–3.5"
      url: https://www.fieldsinstitute.ca/programs/scientific/11-12/exceptional/Alb.-alg.-Ottawa-2012-Vii-new.pdf
    - title: "John C. Baez, The Octonions, §2.2"
      url: https://arxiv.org/pdf/math/0105155v4
---

## Definition

As a real vector space, set $\mathbb O:=\mathbb H\times\mathbb H$, with
componentwise addition and real scalar multiplication, using the quaternion
algebra, conjugation, and norm of [[def-quaternions]]. Define

$$ (a,b)(c,d):=(ac-\bar d\,b,\; da+b\bar c),\qquad \overline{(a,b)}:=(\bar a,-b). $$

Distinguish $1_{\mathbb O}:=(1,0)$; the two-sided unit property is verified in
[[thm-octonions-are-alternative-but-not-associative]]. Write

$$ i=(i,0),\quad j=(j,0),\quad k=(k,0),\quad \ell=(0,1),\quad i\ell=(0,i),\quad j\ell=(0,j),\quad k\ell=(0,k). $$

This fixes the multiplication convention.

## Remarks

The following directed cycles record the convention on the seven imaginary
basis units. An oriented cycle $x\to y\to z\to x$ means $xy=z$, $yz=x$, and
$zx=y$; reversing a product changes its sign. These cycles are an aid for
reading the multiplication table, not a proof of alternativity or
nonassociativity.

```tikzcd
i \arrow[r] & j \arrow[r] & k \arrow[ll,bend left]
\\
i \arrow[r] & \ell \arrow[r] & i\ell \arrow[ll,bend left]
\\
j \arrow[r] & \ell \arrow[r] & j\ell \arrow[ll,bend left]
\\
k \arrow[r] & \ell \arrow[r] & k\ell \arrow[ll,bend left]
\\
i \arrow[r] & k\ell \arrow[r] & j\ell \arrow[ll,bend left]
\\
j \arrow[r] & i\ell \arrow[r] & k\ell \arrow[ll,bend left]
\\
k \arrow[r] & j\ell \arrow[r] & i\ell \arrow[ll,bend left]
```

For example, the first cycle gives $ij=k$; the second gives
$i\ell=(0,i)$, $\ell(i\ell)=i$, and, on reversing the first product,
$\ell i=-i\ell$. These identities can also be checked directly from the pair
formula. The proof of the alternative laws uses that formula, not this diagram.
The theorem [[thm-octonions-are-alternative-but-not-associative]] proves both
alternative laws and displays a nonassociative triple; neither property is
assumed in this definition.
