---
id: cex-rational-map-with-indeterminacy
kind: counterexample
title: "The rational map (x,y) mapsto y / x on the affine plane is undefined along x = 0"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-domain-of-definition-rational-map, def-rational-map-varieties, lem-principal-opens-form-affine-basis, thm-coordinate-ring-principal-open]
justified_by: []
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Algebraic Geometry, rational-map discussion in Chapter 5l"
      url: "https://www.jmilne.org/math/CourseNotes/AG.pdf"
---

## Statement refuted

Not every rational map on affine space extends to a regular map everywhere.

On $\mathbf A_k^2$ with coordinates $(x,y)$, the quotient $y/x$ is regular on
the principal open $D(x)$ and therefore defines a rational map
$$ \eta:\mathbf A_k^2 \dashrightarrow \mathbf A_k^1. $$
Its domain of definition contains every point with $x\ne0$.

It does not extend regularly across any point $(0,b)$ with $b\ne0$. Indeed, an
extension near such a point would give an open neighbourhood $W$ of $(0,b)$ and
a regular function $g$ on $W$ that agrees with $y/x$ on $W\cap D(x)$. By
[[lem-principal-opens-form-affine-basis]], choose a principal open
$D(h)\subseteq W$ with $(0,b)\in D(h)$. Then
[[thm-coordinate-ring-principal-open]] identifies $g|_{D(h)}$ with some
fraction $a/h^n\in k[x,y]_h$, and on the smaller principal open
$D(h)\cap D(x)=D(hx)$ the same theorem identifies the equality
$g=y/x$ with the localization identity
$$ \frac{a}{h^n}=\frac{y}{x}\quad\text{in }k[x,y]_{hx}. $$
Thus some power of $hx$ annihilates $xa-yh^n$. Since $k[x,y]$ is a domain, it
follows that $xa=yh^n$ in $k[x,y]$. Evaluating at $(0,b)$ gives
$$ 0=b\,h(0,b)^n, $$
which is impossible because $b\ne0$ and $(0,b)\in D(h)$ means $h(0,b)\ne0$.
This contradiction shows that no regular extension exists near $(0,b)$.
