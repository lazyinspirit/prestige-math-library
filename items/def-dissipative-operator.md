---
id: def-dissipative-operator
kind: definition
title: "Dissipative operator"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 0
deps:
  - thm-heine-borel-rn
  - def-banach-space
  - def-unbounded-linear-operator-domain-and-graph
  - def-hilbert-space
  - cor-relative-hahn-banach-dual-norming
  - def-hahn-banach-extension-principle-relative
  - cor-bolzano-weierstrass-in-rn
  - def-bounded-linear-operator
justified_by: []
aliases: []
landmark: false
proof_strategy: not-applicable
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Klaus-Jochen Engel and Rainer Nagel, One-Parameter Semigroups for Linear Evolution Equations, Graduate Texts in Mathematics 194 (complete author-hosted monograph)"
      url: "https://www.math.uni-tuebingen.de/de/forschung/agfa/members/engel-nagel_one-parameter-semigroups.pdf/%40%40download/file/engel-nagel_one-parameter-semigroups.pdf"
      locator: "Chapter II Section 3, Definition 3.13 and Proposition 3.23, printed pp. 82-85, 90-91"
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2026 author manuscript; complete 392-page archived text)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "Chapter 11 Section 11.4, definition (11.42), Lemma 11.19 and Corollary 11.20, printed pp. 268-269"
    - title: "Roland Schnaubelt, Evolution Equations, Karlsruhe Institute of Technology (2023/24 course, complete lecture notes)"
      url: "https://iana.math.kit.edu/downloads/iana3/schnaubelt/Skripten/evgl-skript.pdf"
      locator: "Chapter 1 Section 1.3, Definition 1.31 and Proposition 1.32, printed pp. 23-25"
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Definition

Let $X$ be a Banach space over $\mathbb K\in\{\mathbb R,\mathbb C\}$ and let $A:D(A)\subseteq X\to X$ be a linear operator with domain $D(A)$ ([[def-unbounded-linear-operator-domain-and-graph]]). $A$ is **dissipative** if $$\|(\lambda I-A)x\| \ge\lambda\|x\|\qquad\text{for all }\lambda>0\ \text{and all }x\in D(A);$$ equivalently $\|x-\alpha Ax\| \ge\|x\|$ for all $\alpha>0$ and $x\in D(A)$. A dissipative operator has injective $\lambda I-A$ for every $\lambda>0$ and $\|(\lambda I-A)^{-1}z\| \le\lambda^{-1}\|z\|$ on the range of $\lambda I-A$; no surjectivity, closedness or density is implied. If $X$ is a Hilbert space ([[def-hilbert-space]]), then $A$ is dissipative if and only if $\mathrm{Re}\,\langle Ax,x\rangle\le0$ for every $x\in D(A)$: from the norm dissipativity inequality, squaring gives $\mathrm{Re}\,\langle Ax,x\rangle\le\|Ax\|^2/(2\lambda)$ for every $\lambda>0$, so letting $\lambda\to\infty$ yields $\mathrm{Re}\,\langle Ax,x\rangle\le0$. Conversely, if this real-part inequality holds, expanding $\|(\lambda I-A)x\|^2=\lambda^2\|x\|^2-2\lambda\mathrm{Re}\,\langle Ax,x\rangle+\|Ax\|^2$ gives the norm dissipativity inequality. Finally, under the Hahn-Banach extension principle HB ([[def-hahn-banach-extension-principle-relative]]) dissipativity is equivalent to the **norm-duality form**: for every $x\in D(A)$ there exists $x^*\in X^*$ with $\|x^*\|=\|x\|$, $x^*(x)=\|x\|^2$ and $\mathrm{Re}\,x^*(Ax)\le0$; the equivalence is the two-dimensional argument of [T] Lemma 11.19, where HB produces the norming functionals and supplies the extension from $\mathrm{span}\{x,Ax\}$ ([[cor-relative-hahn-banach-dual-norming]]), and the extraction of the limit uses compactness of the finite-dimensional dual unit ball ([[cor-bolzano-weierstrass-in-rn]]).

**Two normalisations of the defining inequality.** Putting $\alpha=1/\lambda$
shows that the displayed inequality is equivalent to
$\|x-\alpha Ax\|\ge\|x\|$ for all $\alpha>0$ and $x\in D(A)$. Since
$\lambda x=(\lambda I-A)x+Ax$, the inequality $\|(\lambda I-A)x\|\ge\lambda\|x\|$
is in turn equivalent to the one-sided estimate
$\lambda\|x\|\le\|(\lambda I-A)x\|$ used below.

**Injectivity and the inverse bound.** If $(\lambda I-A)x=0$ for some
$\lambda>0$ and $x\in D(A)$, then $\lambda\|x\|\le\|(\lambda I-A)x\|=0$, so
$x=0$: each $\lambda I-A$ is injective. If $z=(\lambda I-A)x$ lies in the range,
then $\|x\|\le\lambda^{-1}\|z\|$, so the inverse defined on the range satisfies
$\|(\lambda I-A)^{-1}z\|\le\lambda^{-1}\|z\|$. No surjectivity onto $X$, no
closedness of $A$ and no density of $D(A)$ is asserted, and none is implied.

**The real-part form on a Hilbert space.** Let $X$ be a Hilbert space. If $A$
is dissipative and $x\in D(A)$, then for every $\lambda>0$ the expansion
$$\|(\lambda I-A)x\|^2=\lambda^2\|x\|^2-2\lambda\operatorname{Re}\langle Ax,x\rangle+\|Ax\|^2$$
gives $2\lambda\operatorname{Re}\langle Ax,x\rangle\le\|Ax\|^2$, that is
$\operatorname{Re}\langle Ax,x\rangle\le\|Ax\|^2/(2\lambda)$; letting
$\lambda\to\infty$ yields $\operatorname{Re}\langle Ax,x\rangle\le0$.
Conversely, if $\operatorname{Re}\langle Ax,x\rangle\le0$ for all $x\in D(A)$,
the same expansion gives
$\|(\lambda I-A)x\|^2\ge\lambda^2\|x\|^2$ for every $\lambda>0$, so $A$ is
dissipative. This real-part form is choice-free; the Hilbert-space vocabulary
comes from [[def-hilbert-space]].

**The norm-duality form under HB.** Assume the Hahn-Banach extension principle
([[def-hahn-banach-extension-principle-relative]]) and let
$x\in D(A)$. We claim that $A$ is dissipative if and only if for every
$x\in D(A)$ there is $x^*\in X^*$ with $\|x^*\|=\|x\|$, $x^*(x)=\|x\|^2$ and
$\operatorname{Re}x^*(Ax)\le0$.

*Sufficiency.* If such $x^*$ is given and $\lambda>0$, then
$$\lambda\|x\|^2=\lambda\operatorname{Re}x^*(x)=\operatorname{Re}x^*((\lambda I-A)x)+\operatorname{Re}x^*(Ax)\le\operatorname{Re}x^*((\lambda I-A)x)\le\|x^*\|\,\|(\lambda I-A)x\|=\|x\|\,\|(\lambda I-A)x\|.$$
For $x\ne0$ this is $\lambda\|x\|\le\|(\lambda I-A)x\|$; for $x=0$ it is
trivial. Hence $A$ is dissipative.

*Necessity.* Fix $x\in D(A)$; for $x=0$ take $x^*=0$, so assume $x\ne0$ and put
$M:=\operatorname{span}\{x,Ax\}$, a subspace of finite dimension at most two
over the scalar field $\mathbb K$. For each positive integer $\lambda=n$ the vector
$(\lambda I-A)x$ is nonzero, because $(\lambda I-A)$ is injective. Construct a sequence $y_n\in M^*$ without simultaneously choosing functionals on $X$. Fix a basis of the finite-dimensional space $M$. The coordinate vectors of functionals of norm at most one form a closed bounded subset of a finite real coordinate space: $|y(u)|\le\|u\|$ for every $u\in M$ is an intersection of closed conditions, and each basis evaluation is bounded. For each $n$, intersect this set with $y((nI-A)x)=\|(nI-A)x\|$. The intersection is nonempty by [[cor-relative-hahn-banach-dual-norming]] applied to $M$, and compact by [[thm-heine-borel-rn]]. Select its lexicographically least coordinate vector by minimizing its real coordinates successively; each minimum exists because the corresponding projected compact set is nonempty. This finite deterministic procedure defines $y_n$ for all $n$, with norm one and the required norming identity, without Countable Choice. Write $y_\lambda=y_n$, $\lambda=n$, below. Then
$$\operatorname{Re}y_\lambda(Ax)=\lambda\operatorname{Re}y_\lambda(x)-\|(\lambda I-A)x\|\le\lambda|y_\lambda(x)|-\lambda\|x\|\le0,$$
and likewise
$y_\lambda(x)=\|(\lambda I-A)x\|/\lambda+y_\lambda(Ax)/\lambda$, where
$\bigl|\|(\lambda I-A)x\|/\lambda-\|x\|\bigr|\le\|Ax\|/\lambda\to0$ and
$|y_\lambda(Ax)|\le\|Ax\|$; hence $y_\lambda(x)\to\|x\|$.

Passing to a subsequence. The restrictions $y_n$ lie in the unit ball
of the dual of the finite-dimensional space $M$, which is sequentially compact:
after choosing coordinates for $M^*$, the coordinates of a functional amount to a
bounded sequence in a Euclidean space, and [[cor-bolzano-weierstrass-in-rn]]
extracts a convergent subsequence. Take $\lambda_n\to\infty$ along a subsequence
on which $y_{\lambda_n}$ converges to some $y\in M^*$. Then $\|y\|\le1$,
$\operatorname{Re}y(Ax)\le0$ (a closed condition), and
$y(x)=\lim_n y_{\lambda_n}(x)=\|x\|$; consequently $\|y\|=1$ because
$|y(x)|=\|x\|$ with $x\ne0$.

Extension to $X$. The real part $g:=\operatorname{Re}y$ is a real-linear
functional on the real vector space $M$ with $|g(u)|\le\|u\|$ for $u\in M$;
here the real structure of $X$ is the one underlying the complex case as well.
Apply HB, with the sublinear functional $p(u)=\|u\|$, to extend $g$ to a
real-linear $G:X\to\mathbb R$ satisfying $G(u)\le\|u\|$ for all $u\in X$; then
$|G(u)|\le\|u\|$ by applying the inequality to $-u$. In the real case set
$\widetilde x:=G$. In the complex case set
$\widetilde x(u):=G(u)-iG(iu)$; then $\widetilde x(iu)=G(iu)+iG(u)=i\widetilde x(u)$; together with real linearity this proves complex linearity, and its real part is $G$. For $\|u\|\le1$ put $z=\widetilde x(u)$. If $z\ne0$, take $c=\overline z/|z|$, so $|c|=1$ and $\widetilde x(cu)=cz=|z|$ is real. Thus $|z|=G(cu)\le\|cu\|=\|u\|\le1$; if $z=0$ the same bound is immediate. Thus $\|\widetilde x\|\le1$ in either case, and
$x^*:=\|x\|\,\widetilde x$ satisfies $\|x^*\|=\|x\|$ because
$\widetilde x(x)$, having real part $G(x)=g(x)=\|x\|$ and modulus at most
$\|x\|$, equals the positive real number $\|x\|$. Finally
$\operatorname{Re}x^*(Ax)=\|x\|\,G(Ax)=\|x\|\operatorname{Re}y(Ax)\le0$,
as required. The definition and both elementary forms are choice-free; only the
norm-duality form uses HB and the finite-dimensional compactness above.
