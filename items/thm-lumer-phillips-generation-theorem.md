---
id: thm-lumer-phillips-generation-theorem
kind: theorem
title: "Lumer-Phillips generation theorem"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 12
deps:
  - def-dependent-choice
  - def-dissipative-operator
  - cor-contraction-hille-yosida-theorem
  - lem-semigroup-generator-resolvents-satisfy-the-resolvent-identity
  - def-resolvent-of-a-closed-operator
  - thm-generators-are-closed-and-densely-defined
  - lem-neumann-series
  - def-strongly-continuous-semigroup
  - lem-operator-norm-is-a-norm
  - thm-bounded-operator-space-is-banach
  - lem-composition-operator-norm-inequality
  - def-unital-banach-algebra
  - def-operator-norm
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Klaus-Jochen Engel and Rainer Nagel, One-Parameter Semigroups for Linear Evolution Equations, Graduate Texts in Mathematics 194 (complete author-hosted monograph)"
      url: "https://www.math.uni-tuebingen.de/de/forschung/agfa/members/engel-nagel_one-parameter-semigroups.pdf/%40%40download/file/engel-nagel_one-parameter-semigroups.pdf"
      locator: "Chapter II Section 3, Proposition 3.14 and Theorem 3.15, printed pp. 82-84"
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2026 author manuscript; complete 392-page archived text)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "Chapter 11 Section 11.4, Theorem 11.21, printed pp. 266-270"
    - title: "Roland Schnaubelt, Evolution Equations, Karlsruhe Institute of Technology (2023/24 course, complete lecture notes)"
      url: "https://iana.math.kit.edu/downloads/iana3/schnaubelt/Skripten/evgl-skript.pdf"
      locator: "Chapter 1 Section 1.3, Theorem 1.39 and proof, printed pp. 30-31 (March 19, 2026 revision)"
    - title: "Mathew A. Johnson, Math 951 Lecture Notes, Chapter 6: Introduction to Semigroup Methods, University of Kansas (complete 37-page chapter)"
      url: "https://matjohn.ku.edu/sites/matjohn/files/files/Math951Notes_Ch6A.pdf"
      locator: "Chapter 6 Section 2.2, Theorem 5, printed p. 18"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume Dependent Choice ([[def-dependent-choice]]). Let $A:D(A)\subseteq X\to X$ be a densely defined dissipative operator on a Banach space $X$ ([[def-dissipative-operator]]). Then the following are equivalent: (a) $A$ generates a strongly continuous semigroup of contractions; (b) $\mathrm{Ran}(\lambda_0I-A)=X$ for some $\lambda_0>0$; (c) $\mathrm{Ran}(\lambda I-A)=X$ for every $\lambda>0$. In that case $A$ is closed, $(0,\infty)\subseteq\rho(A)$, $\|R(\lambda,A)\| \le1/\lambda$ for all $\lambda>0$, and $A$ is maximal dissipative (it has no proper dissipative extension).

## Facts & Assumptions

**Given:** Dependent Choice; A densely defined dissipative operator $A:D(A)\subseteq X\to X$ on a Banach space $X$ ([[def-dissipative-operator]], [[def-strongly-continuous-semigroup]]).

[F1] Dissipativity means $\|(\lambda I-A)x\|\ge\lambda\|x\|$ for all $\lambda>0$ and $x\in D(A)$; hence each $\lambda I-A$ is injective and $\|(\lambda I-A)^{-1}z\|\le\lambda^{-1}\|z\|$ on the range of $\lambda I-A$ ([[def-dissipative-operator]]).

[F2] Contraction Hille-Yosida: a closed densely defined operator with $(0,\infty)\subseteq\rho(A)$ and $\|R(\lambda,A)\|\le1/\lambda$ for all $\lambda>0$ generates a strongly continuous semigroup of contractions; conversely the generator of a contraction semigroup has $(0,\infty)\subseteq\rho(A)$ and $\|R(\lambda,A)\|\le1/\lambda$ ([[cor-contraction-hille-yosida-theorem]]).

[F3] Resolvent identity: $R(\lambda,A)-R(\lambda_0,A)=(\lambda_0-\lambda)R(\lambda,A)R(\lambda_0,A)$ ([[lem-semigroup-generator-resolvents-satisfy-the-resolvent-identity]]). Consequently, for $|\lambda_0-\lambda|<1/\|R(\lambda_0,A)\|$ the series $\sum_{k\ge0}(\lambda_0-\lambda)^kR(\lambda_0,A)^{k+1}$ converges in $\mathcal B(X)$ and its sum is the inverse of $\lambda I-A$: writing $R_0=R(\lambda_0,A)$ and $Q=I+(\lambda-\lambda_0)R_0$, one has $(\lambda I-A)R_0=Q$ and, on $D(A)$, $\lambda I-A=Q(\lambda_0I-A)$. Thus $R_0Q^{-1}$ is a two-sided inverse and has range in $D(A)$. In the Neumann series $Q^{-1}=\sum_{k\ge0}(\lambda_0-\lambda)^kR_0^k$, the operators commute with $R_0$ by taking limits of polynomials, giving the displayed series. Indeed, for $X\ne\{0\}$, $\mathcal B(X)$ is complete for the operator norm ([[thm-bounded-operator-space-is-banach]]) with submultiplicative composition ([[lem-composition-operator-norm-inequality]], [[def-operator-norm]]), so the Neumann-series computation applies — for complex $X$ through [[lem-neumann-series]] and the unital Banach-algebra structure ([[def-unital-banach-algebra]]), and for real $X$ by the identical telescoping computation. An operator with a bounded everywhere-defined inverse is closed: the inverse graph is the zero set of the continuous map $(z,y)\mapsto y-Rz$, and swapping graph coordinates gives the graph of the original operator. A scalar shift of its graph is a homeomorphism. Hence $A$ is closed as soon as $\lambda I-A$ has such an inverse; a closed bijective operator with bounded inverse lies in the resolvent set ([[def-resolvent-of-a-closed-operator]]).

[F4] Operators of the form $\lambda I-A$ with $\lambda>0$ are closed when $A$ is closed, and $A$ is closed as soon as some $\lambda I-A$ has a bounded everywhere-defined inverse; generators are closed and densely defined ([[thm-generators-are-closed-and-densely-defined]], [[def-resolvent-of-a-closed-operator]]).



## Proof

**Proof technique:** direct: dissipativity gives injectivity and the inverse bound, surjectivity at one $\lambda_0$ propagates by the resolvent series, and the contraction generation theorem finishes.

1.1 If $X=\{0\}$ then $D(A)=X$ and all claims hold for the unique zero operator and semigroup; hence assume $X\ne\{0\}$. **(b)$\Rightarrow$ closedness, $\lambda_0\in\rho(A)$.** Assume $\operatorname{Ran}(\lambda_0I-A)=X$ for some $\lambda_0>0$. By [F1] $\lambda_0I-A$ is injective with $\|(\lambda_0I-A)^{-1}z\|\le\lambda_0^{-1}\|z\|$ for all $z\in X$; thus its inverse is a bounded everywhere-defined operator and $\lambda_0I-A$ is bijective, so $\lambda_0\in\rho(A)$ and $A$ is closed by [F4]. [F1, F4]

1.2 **(a)$\Rightarrow$(b),(c).** If $A$ generates a contraction semigroup, [F2] gives $(0,\infty)\subseteq\rho(A)$ with $\|R(\lambda,A)\|\le1/\lambda$; therefore every $\lambda I-A$, $\lambda>0$, is bijective onto $X$, which is (c) and, taking e.g. $\lambda=1$, also (b). Trivially (c)$\Rightarrow$(b). [F2]

2.1 **Propagation to $(0,\infty)$.** With $\lambda_0\in\rho(A)$ and $\|R(\lambda_0,A)\|\le1/\lambda_0$, the series of [F3] converges for $|\lambda-\lambda_0|<\lambda_0$ and represents $R(\lambda,A)$; hence $(0,2\lambda_0)\subseteq\rho(A)$. Dissipativity now gives $\|R(\lambda,A)\|\le1/\lambda$ for every $\lambda\in\rho(A)\cap(0,\infty)$ by [F1], in particular on $(0,2\lambda_0)$. Replacing $\lambda_0$ by any $\lambda_1\in(\lambda_0,2\lambda_0)$, the same argument gives $(0,2\lambda_1)\subseteq\rho(A)$ with $\lambda_1>\lambda_0$; iterating with the explicit points $\lambda_k=(3/2)^k\lambda_0$, each inside the previous interval $(0,2\lambda_{k-1})$, gives $(0,2\lambda_k)\subseteq\rho(A)$ for all $k$. Since $\lambda_k\to\infty$, this yields $(0,\infty)\subseteq\rho(A)$ and $\|R(\lambda,A)\|\le1/\lambda$ for all $\lambda>0$. In particular $\lambda I-A$ is surjective for every $\lambda>0$, so (c) holds. [F1, F3, step 1.1]

3.1 **(b)$\Rightarrow$(a).** $A$ is closed and densely defined by hypothesis and [step 1.1]; [step 2.1] supplies $(0,\infty)\subseteq\rho(A)$ and $\|R(\lambda,A)\|\le1/\lambda$; hence [F2] makes $A$ the generator of a strongly continuous semigroup of contractions. [F2, step 1.1, step 2.1]

3.2 **Maximal dissipativity.** Let $A'\supseteq A$ be a dissipative extension and fix $\lambda>0$. By [step 2.1], $\lambda I-A$ maps $D(A)$ onto $X$; given $x\in D(A')$, choose $y\in D(A)$ with $(\lambda I-A)y=(\lambda I-A')x$. Since $A'$ agrees with $A$ on $D(A)$, $(\lambda I-A')y=(\lambda I-A)y=(\lambda I-A')x$, and injectivity of $\lambda I-A'$ by [F1] gives $x=y\in D(A)$. Hence $D(A')=D(A)$ and $A'=A$: $A$ has no proper dissipative extension. [F1, step 2.1]

4.1 Combining the implications: (a), (b) and (c) are equivalent for a densely defined dissipative operator, and in that case $A$ is closed, $(0,\infty)\subseteq\rho(A)$, $\|R(\lambda,A)\|\le1/\lambda$, and $A$ is maximal dissipative. [step 1.1, step 2.1, step 3.1, step 1.2, step 3.2] ∎
