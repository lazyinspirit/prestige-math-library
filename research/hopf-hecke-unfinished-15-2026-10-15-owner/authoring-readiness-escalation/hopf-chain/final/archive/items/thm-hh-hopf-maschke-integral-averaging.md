---
id: thm-hh-hopf-maschke-integral-averaging
kind: theorem
title: "Hopf–Maschke theorem by integral averaging"
status: draft
origin: pipeline
pipeline_run: hopf-hecke-unfinished-15-2026-10-15
dependency_level: 5
deps: [def-hh-hopf-algebra-and-antipode, def-hh-left-right-integrals-and-integral-functionals, thm-hh-antipode-uniqueness-anti-multiplication-and-anti-comultiplication, lem-hh-finite-matrix-and-module-preliminaries, def-left-and-right-modules, def-submodule, def-semisimple-module, def-semisimple-ring]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
axiom_use: "No arbitrary Axiom of Choice is used. The splitting is constructed only for finite-dimensional submodules of the regular module, and the final decomposition is by finite induction."
sources:
  references:
    - title: "Paolo Saracco, Notes on Hopf Modules, Integrals and Frobenius Hopf Algebras (course notes, 2019)"
      url: "https://paolo.saracco.web.ulb.be/Material/2019-06-12_Structure%20Theorem_course%20notes.pdf"
      locator: "§4.2, Lemma 4.4, Theorem 4.5, and Remark 4.6, PDF pp. 20–22: the Casimir identity from a normalized left integral and the semisimplicity criterion"
    - title: "Erasmus Mini-Course on Hopf Algebras (lecture notes)"
      url: "https://www.fc.up.pt/pessoas/clomp/Adana-lectures.pdf"
      locator: "Lecture 7, Theorem 7.1, PDF pp. 17–18: splitting the augmentation and averaging a linear section with a normalized integral"
verification:
  precheck: pass
---

## Statement

Let $H\ne0$ be a finite-dimensional Hopf algebra as in [[def-hh-hopf-algebra-and-antipode]] over a field $k$. Then $H$ is semisimple as a ring ([[def-semisimple-ring]]), that is, its left regular module is a direct sum of simple left submodules ([[def-semisimple-module]]), if and only if there exists a left integral $\Lambda\in H$ with $\varepsilon(\Lambda)\ne0$. In that case $\Lambda$ can be normalized so that $\varepsilon(\Lambda)=1$.

## Facts & Assumptions

**Given:** A nonzero finite-dimensional Hopf algebra $H$ over $k$. The trivial left $H$-module $k$ has action $h\cdot c=\varepsilon(h)c$, and $\varepsilon:H\to k$ is a surjective left $H$-module map.

[F1] [[def-hh-hopf-algebra-and-antipode]]: $H$ is a unital algebra and counital coalgebra with $\Delta,\varepsilon$ algebra maps and antipode $S$ satisfying $\sum S(h_1)h_2=\sum h_1S(h_2)=\varepsilon(h)1$.

[F2] [[def-hh-left-right-integrals-and-integral-functionals]]: a left integral $\Lambda$ satisfies $h\Lambda=\varepsilon(h)\Lambda$ for all $h$.

[F3] [[def-left-and-right-modules]]: a unital left module has an associative, unital scalar action; in particular the counit action makes $k$ a left $H$-module.

[F4] [[def-semisimple-module]]: a left module is semisimple when it is an internal direct sum of simple submodules.

[F5] [[def-semisimple-ring]]: $H$ is semisimple as a ring exactly when its left regular module is semisimple.

[F6] [[lem-hh-finite-matrix-and-module-preliminaries]]: every submodule of a finite direct sum of simple modules has a complement; finite-dimensional subspaces admit finite bases and complements.

[F7] [[thm-hh-antipode-uniqueness-anti-multiplication-and-anti-comultiplication]]: $S(ab)=S(b)S(a)$ and $\Delta(S(a))=\sum S(a_2)\otimes S(a_1)$.

[F8] [[def-left-and-right-modules]] and [[def-submodule]]: a submodule of the regular left $H$-module is an additive subgroup closed under left multiplication by every element of $H$; in this proof these submodules are called left ideals.

## Proof
1.1 Suppose $H$ is semisimple. By [F4]–[F5], write its left regular module as a direct sum of simple submodules, which are left ideals by [F8]. Only finitely many summands can be nonzero: if $n=\dim_kH$ and there were more than $n$ nonzero summands, choosing one nonzero vector from each of $n+1$ distinct summands would give $n+1$ linearly independent vectors in $H$. Thus $H$ is a finite direct sum of simple modules. [F4, F5, F8, given, choose, algebra]

1.2 Conversely suppose a left integral $t$ has $\varepsilon(t)\ne0$ and put $\Lambda=t/\varepsilon(t)$. Then $\Lambda$ is a left integral and $\varepsilon(\Lambda)=1$. For every $h\in H$, $\sum h\Lambda_1\otimes S(\Lambda_2)=\sum h_1\Lambda_1\otimes S(\Lambda_2)S(h_2)h_3=\sum h_1\Lambda_1\otimes S(h_2\Lambda_2)h_3=\sum (h_1\Lambda)_1\otimes S((h_1\Lambda)_2)h_2=\sum\Lambda_1\otimes S(\Lambda_2)h$. The first equality inserts $\sum S(h_2)h_3=\varepsilon(h_2)1$; the second uses anti-multiplicativity [F7]; the third uses multiplicativity of $\Delta$; the fourth uses $h_1\Lambda=\varepsilon(h_1)\Lambda$. [F1, F2, F7, algebra]

2.1 The kernel $J=\ker\varepsilon$ is a left ideal (in the sense of [F8]) since $\varepsilon$ is an algebra map. By [F6], choose a left $H$-submodule $C$ with $H=J\oplus C$. The restriction $\varepsilon|_C:C\to k$ is injective because $C\cap J=0$, and is surjective because $\varepsilon(H)=k$ and $\varepsilon(J)=0$. Its inverse $s:k\to C\subset H$ is $H$-linear. Set $\Lambda=s(1)$; then $h\Lambda=s(h\cdot1)=\varepsilon(h)\Lambda$ and $\varepsilon(\Lambda)=1$. [step 1.1, F1, F3, F6, F8, algebra]

2.2 Let $J$ be any left ideal of $H$, meaning a submodule of the regular left module as in [F8]. Choose a $k$-linear projection $p:H\to J$ with $p|_J=\mathrm{id}_J$ by extending a finite basis of $J$ to one of $H$; this uses only finite-dimensional linear algebra. Define $P(v)=\sum\Lambda_1p(S(\Lambda_2)v)$. The values lie in $J$ because $p$ takes values in $J$ and $J$ is a left ideal. The tensor identity in step 1.2 gives $P(hv)=\sum\Lambda_1p(S(\Lambda_2)hv)=\sum h\Lambda_1p(S(\Lambda_2)v)=hP(v)$, so $P$ is $H$-linear. For $v\in J$, $S(\Lambda_2)v\in J$, whence $P(v)=\sum\Lambda_1S(\Lambda_2)v=\varepsilon(\Lambda)v=v$ by [F1]. Thus $P$ is a retraction onto $J$, and $H=J\oplus\ker P$. [step 1.2, F1, F6, F8, algebra]

3.1 Every submodule of the regular module $H$ is a left ideal by [F8] and therefore has a complement by step 2.2. Induct on $\dim_kH$: a nonzero finite-dimensional module has a nonzero submodule $U$ of least positive dimension (among the finitely many possible dimensions); it is simple because any proper nonzero submodule would have smaller positive dimension. Split $H=U\oplus M$. If $L\le M$, step 2.2 gives $H=L\oplus C$ for some submodule $C$; for any $m\in M$, write $m=l+c$. Since $l\in L\le M$, $c=m-l$ lies in $C\cap M$, and $L\cap(C\cap M)=0$, so $M=L\oplus(C\cap M)$. Thus every submodule of $M$ has a complement in $M$. Induction makes $M$ a finite direct sum of simple submodules, so $H=U\oplus M$ is semisimple. Hence $H$ is a semisimple ring by [F5]. The forward and reverse implications prove the equivalence. [step 2.1, step 2.2, F5, F8, given, choose, algebra] ∎

## Remarks

This criterion concerns semisimplicity of $H$ as an algebra. It does not assert that $H^*$ is semisimple or that $S^2=\mathrm{id}$ in arbitrary characteristic.
