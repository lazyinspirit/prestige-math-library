---
id: lem-modular-group-reduction-to-the-standard-domain
kind: lemma
title: "Reduction of orbits to the standard domain"
status: published
origin: pipeline
deps:
  - def-modular-group-action-on-the-upper-half-plane
  - lem-int-bounded-above-has-greatest
  - lem-complex-conjugation-and-modulus-laws
  - lem-of-abs-value
  - thm-nonnegative-series-bounded-partial-sums
  - def-complex-conjugate-real-imaginary-part-and-modulus
  - lem-integer-part
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "J. S. Milne, Modular Functions and Modular Forms (v1.31, 2017)"
      url: "https://www.jmilne.org/math/CourseNotes/MF.pdf"
      locator: "Theorem 2.12 and Lemma 2.13, printed pp. 32-34: the minimisation argument and finiteness of lattice pairs with |cz+d| <= N."
    - title: "D. Zagier, Elliptic Modular Forms and Their Applications, in The 1-2-3 of Modular Forms (Universitext, Springer, 2008)"
      url: "https://people.mpim-bonn.mpg.de/zagier/files/doi/10.1007/978-3-540-74119-0_1/fulltext.pdf"
      locator: "Proposition 1, printed pp. 6-8: every point of H is equivalent to a point of the standard domain."
    - title: "C. T. McMullen, Advanced Complex Analysis, Math 213a course notes (Harvard, 2010)"
      url: "https://people.math.harvard.edu/~ctm/home/text/class/harvard/213a/10/html/home/course/course.pdf"
      locator: "Theorem 5.28, printed pp. 94-95: the region |Re tau| <= 1/2, |tau| > 1 is a fundamental domain."
proof_strategy: direct
---

## Statement

Let $\Gamma'=\langle S,T\rangle\le PSL_2(\mathbb Z)$ and $\overline D=\{\tau\in\mathfrak H:|\Re\tau|\le1/2,\ |\tau|\ge1\}$. (a) Every $\tau\in\mathfrak H$ is $\Gamma'$-equivalent to a point of $\overline D$: among the points of the orbit $\Gamma'\cdot\tau$ some point $\tau_0$ has maximal imaginary part; after applying a power of $T$ one has $|\Re\tau_0|\le1/2$, and then necessarily $|\tau_0|\ge1$. (b) For fixed $\tau\in\mathfrak H$ and $N>0$ there are only finitely many pairs $(c,d)\in\mathbb Z^2$ with $|c\tau+d|\le N$.

## Facts & Assumptions

**Given:** $\tau=x+iy\in\mathfrak H$, so $y>0$, and the action of $\Gamma'$ with $\Im(\gamma\cdot\tau)=\Im\tau/|c\tau+d|^2$ for the bottom row $(c,d)$ of $\gamma$; $T\cdot\tau=\tau+1$, $S\cdot\tau=-1/\tau$ ([[def-modular-group-action-on-the-upper-half-plane]]).

[F1] For $z\in\mathbb C$, $|\operatorname{Re}z|\le|z|$, $|\operatorname{Im}z|\le|z|$, and $|z|^2=z\bar z$ ([[lem-complex-conjugation-and-modulus-laws]], [[def-complex-conjugate-real-imaginary-part-and-modulus]]).

[F2] A nonempty subset of $\mathbb Z$ that is bounded above has a greatest element and one that is bounded below has a least element; in particular the integers in a bounded interval form a finite set ([[lem-int-bounded-above-has-greatest]]). Every real has an integer part $\lfloor u\rfloor$ with $\lfloor u\rfloor\le u<\lfloor u\rfloor+1$ ([[lem-integer-part]]).

[F3] If $0<r<1$ then $1/r^2>1$ ([[lem-of-abs-value]]).

## Proof

1.1 Fix $N>0$ and suppose $|c\tau+d|\le N$. Since $\operatorname{Im}(c\tau+d)=cy$ and $\operatorname{Re}(c\tau+d)=cx+d$, [F1] gives $|c|y\le N$, that is $|c|\le N/y$; by [F2] only finitely many integers $c$ satisfy this. For each such $c$, [F1] gives $|cx+d|\le N$, so $-N-cx\le d\le N-cx$, and [F2] leaves only finitely many integers $d$. Hence only finitely many pairs $(c,d)$ satisfy $|c\tau+d|\le N$. [F1, F2, given, algebra]

2.1 The set $V:=\{|c\tau+d|:\gamma\in\Gamma'\text{ with bottom row }(c,d)\}$ is nonempty (the identity has value $|0\cdot\tau+1|=1$) and every element is positive. Applying 1.1 with $N=1$ shows that the elements of $V$ are among the finitely many numbers $|c\tau+d|$ attached to pairs with $|c\tau+d|\le1$, together with values $>1$; hence $V$ has a least element $m>0$, realized by some $\gamma_0\in\Gamma'$. Since $\Im(\gamma\cdot\tau)=y/|c\tau+d|^2$, the point $\tau_0:=\gamma_0\cdot\tau$ of the orbit has maximal imaginary part $y/m^2$: for every $\gamma\in\Gamma'$ with bottom row $(c,d)$ one has $|c\tau+d|\ge m$, so $\Im(\gamma\cdot\tau)=y/|c\tau+d|^2\le y/m^2=\Im\tau_0$. Choose $n\in\mathbb Z$ with $|\Re\tau_0-n|\le1/2$, possible by taking $n=\lfloor\Re\tau_0+1/2\rfloor$ [F2]; then $\tau_1:=T^{-n}\cdot\tau_0$ satisfies $\Im\tau_1=\Im\tau_0$ (translation does not change the imaginary part) and $|\Re\tau_1|=|\Re\tau_0-n|\le1/2$. If $|\tau_1|<1$, then $S\tau_1\in\Gamma'\cdot\tau$ and $\Im(S\tau_1)=\Im\tau_1/|\tau_1|^2>\Im\tau_1$ by [F1] and [F3], contradicting the maximality of $\Im\tau_0=\Im\tau_1$. Hence $|\tau_1|\ge1$, and $\tau_1\in\overline D$ is the required $\Gamma'$-equivalent point. [F1, F2, F3, step 1.1, given, algebra] ∎
