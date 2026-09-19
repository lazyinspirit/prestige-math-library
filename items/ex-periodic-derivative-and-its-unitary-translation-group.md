---
id: ex-periodic-derivative-and-its-unitary-translation-group
kind: example
title: "Periodic derivative and its unitary translation group"
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [cex-symmetric-need-not-be-self-adjoint, thm-cayley-correspondence, thm-self-adjointness-range-criterion, thm-stone-one-parameter-unitary-groups, def-symmetric-self-adjoint-and-essentially-self-adjoint, def-strongly-continuous-one-parameter-unitary-group, def-absolutely-continuous-function, thm-integration-by-parts-for-absolutely-continuous-functions, def-axiom-of-choice, def-countable-choice, def-dependent-choice, def-infinitesimal-generator-of-a-unitary-group]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Dana P. Williams, Lecture Notes on the Spectral Theorem"
      url: "https://www.math.dartmouth.edu/~dana/bookspapers/ln-spec-thm.pdf"
      locator: "Example 7.23 (operator T_2) and Theorem 7.37, pp.32-39"
    - title: "Gerald Teschl, Mathematical Methods in Quantum Mechanics, second edition"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe2.pdf"
      locator: "Section 2.6, pp.91-95 and Section 5.1, pp.145-148"
---

## Example

Assume the Axiom of Choice. On $H=L^2(0,1)$
let
$$D(P)=\{f\in AC[0,1]:f'\in L^2(0,1),\ f(0)=f(1)\},\qquad Pf:=-i f' .$$
Then $P$ is self-adjoint, and $V(t)f(x):=f((x+t)\bmod 1)$ defines a strongly
continuous unitary group whose generator is $iP$; equivalently
$e^{itP}f(x)=f(x+t\bmod1)$ and the derivative domain of the group is exactly
$D(P)$.

## Facts & Assumptions

[A1] The minimal derivative operator $T$ of the counterexample is densely defined, closed and symmetric, with $D(T^*)=\{g\in AC[0,1]:g'\in L^2(0,1)\}$ and $T^*g=-ig'$; its complex integration by parts for $f\in D(T)$ gives $\langle Tf,g\rangle=-i\int_0^1f\overline{g'}$ for complex absolutely continuous $g$ ([[cex-symmetric-need-not-be-self-adjoint]], [[def-absolutely-continuous-function]], [[thm-integration-by-parts-for-absolutely-continuous-functions]]).

[A2] A densely defined symmetric operator with $\operatorname{ran}(P\pm i)=H$ is self-adjoint; the periodic operator here has those ranges ([[thm-self-adjointness-range-criterion]], [[def-symmetric-self-adjoint-and-essentially-self-adjoint]]).

[A3] The generator of a strongly continuous unitary group is skew-adjoint, and $T\mapsto e^{itT}$ is a bijection from self-adjoint operators onto strongly continuous unitary groups with the derivative characterisation of the domain ([[thm-stone-one-parameter-unitary-groups]], [[def-infinitesimal-generator-of-a-unitary-group]], [[def-strongly-continuous-one-parameter-unitary-group]]).

[A4] A self-adjoint operator has no proper symmetric extension, so a self-adjoint operator containing a symmetric operator $P$ with dense domain must equal it ([[def-symmetric-self-adjoint-and-essentially-self-adjoint]]).

## Verification

**Proof technique:** direct.

**Given:** AC, $H=L^2(0,1)$ and the periodic operator $P$ above. [[def-axiom-of-choice]]

1.1 $P$ is densely defined (the functions of $C_c^\infty(0,1)$, extended by zero, lie in $D(P)$ and are dense in $L^2(0,1)$) and symmetric: for $f,g\in D(P)$ the complex integration by parts of [[cex-symmetric-need-not-be-self-adjoint]] gives $\langle Pf,g\rangle=-i\bigl(f(1)\overline{g(1)}-f(0)\overline{g(0)}\bigr)+i\int_0^1f\overline{g'}=i\int_0^1f\overline{g'}=\langle f,Pg\rangle$, the boundary term vanishing by periodicity and $\langle f,Pg\rangle=\int_0^1f\overline{(-ig')}=i\int_0^1f\overline{g'}$. [A1, given]

1.2 $(P+i)$ and $(P-i)$ are onto: for $g\in L^2(0,1)$ the equation $-iu'+iu=g$ has the unique absolutely continuous solution $u(x)=e^{x}u(0)+i\int_0^xe^{x-t}g(t)\,dt$ with $u(0)=\frac{-ie}{e-1}\int_0^1e^{-t}g(t)\,dt$, chosen to enforce $u(1)=u(0)$; it lies in $D(P)$, and the same computation with $i$ replaced by $-i$ solves $(P-i)u=g$. Hence $\operatorname{ran}(P\pm i)=H$. [A2, given]

1.3 $V$ is a strongly continuous unitary group: $V(t)$ is isometric because $x\mapsto x+t\bmod1$ preserves Lebesgue measure, $V(s)V(t)=V(s+t)$, and continuity in $L^2$ follows by approximating $f\in L^2$ by a continuous periodic function and using uniform continuity, or directly by dominated convergence for continuous periodic $f$. [A3, given]

2.1 By step 1.1 and step 1.2 the range criterion makes $P$ self-adjoint. [A2, step 1.1, step 1.2]

2.2 For $f\in D(P)$ the periodic extension of $f$ is absolutely continuous with periodic derivative $f'$, and $\frac1t(V(t)f-f)(x)=\frac1t\int_x^{x+t}f'(s)\,ds\to f'(x)=iPf(x)$ in $L^2(0,1)$, using the fundamental theorem of calculus and the $L^2$ continuity of translations. Hence $D(P)\subseteq D(G)$ for the generator $G$ of $V$, with $Gf=iPf$. [A2, A3, step 1.3]

3.1 The generator $G$ of $V$ is skew-adjoint by Stone's theorem, so $S:=-iG$ is self-adjoint; step 2.2 gives $P\subseteq S$, and a self-adjoint operator has no proper symmetric extension, so $P=S$ and $G=iP$; by Stone's theorem again $V(t)=e^{itP}$ and its derivative domain is $D(P)$. [A3, A4, step 2.2] ∎
