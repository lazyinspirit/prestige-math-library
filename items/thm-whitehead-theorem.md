---
id: "thm-whitehead-theorem"
kind: "theorem"
title: "Whitehead theorem"
status: "draft"
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["def-weak-homotopy-equivalence","thm-cellular-approximation-for-maps-of-cw-pairs","lem-cellular-mapping-cylinders-and-relative-cylinders-are-cw-complexes","lem-a-weak-equivalence-of-cw-complexes-has-vanishing-relative-homotopy-groups","lem-vanishing-relative-homotopy-extends-a-homotopy-inverse-over-successive-cells","prop-higher-homotopy-basepoint-transport-and-moving-homotopies","def-homotopy-equivalence","def-axiom-of-choice"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Hatcher Theorem 4.5; May Whitehead Theorem, Chapter 10 §3
      url: https://pi.math.cornell.edu/~hatcher/AT/ATch4.pdf
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: "direct"
---

## Statement

Assume the Axiom of Choice. Every weak homotopy equivalence $f:X\to Y$ between CW complexes is a homotopy equivalence. If $X,Y$ are finite CW complexes, the same conclusion holds without any choice principle.

## Facts & Assumptions

[F1] [[def-weak-homotopy-equivalence]] requires component bijectivity and isomorphisms at all source basepoints.

[F2] [[thm-cellular-approximation-for-maps-of-cw-pairs]] deforms $f$ to a cellular map, choice-free for finite $X$ and with AC for arbitrary $X$.

[F3] [[lem-cellular-mapping-cylinders-and-relative-cylinders-are-cw-complexes]] gives the ordinary CW mapping cylinder of a cellular map, its endpoint subcomplexes, exact cell count and strong deformation onto its target, without choice.

[F4] [[lem-a-weak-equivalence-of-cw-complexes-has-vanishing-relative-homotopy-groups]] converts weak equivalence into a component bijection and trivial relative groups for the ordinary mapping-cylinder source inclusion.

[F5] [[lem-vanishing-relative-homotopy-extends-a-homotopy-inverse-over-successive-cells]] compresses a CW complex onto such a source subcomplex, fixing it pointwise, choice-free for finitely many relative cells and with AC otherwise.

[F6] [[prop-higher-homotopy-basepoint-transport-and-moving-homotopies]] controls the homomorphisms induced by a homotopy with a moving basepoint. [[def-homotopy-equivalence]] requires the two homotopy-inverse identities.

[A1] [[def-axiom-of-choice]] is used only in the arbitrary-cell clauses of [F2] and [F5].

## Proof

**Given:** A weak homotopy equivalence $f:X\to Y$ of CW complexes.

1.1 By [F2], with the empty fixed subcomplex, take a cellular $g:X\to Y$ and a homotopy $E:f\simeq g$. If $X$ is finite this uses its finite clause; otherwise use [A1]. For each $x\in X$, the track $\gamma_x(t)=E(x,t)$ runs from $f(x)$ to $g(x)$, and [F6] gives $f_* = \beta_{\gamma_x}g_*$ on $\pi_n(X,x)$ for every $n\ge1$. Since $f_*$ and $\beta_{\gamma_x}$ are isomorphisms, $g_*$ is an isomorphism. The same tracks show that $f,g$ induce the identical function on components. Thus $g$ is weak at all basepoints and on all components, even though $E$ need not fix any prescribed basepoint. [F1, F2, F6, A1, given]

2.1 Form the ordinary mapping cylinder $M=M_g$ using [F3], with source inclusion $j:X\hookrightarrow M$, target inclusion $k:Y\hookrightarrow M$ and retraction $r:M\to Y$. Then $rj=g$, $rk=\mathrm{id}_Y$, and the cylinder deformation $D$ runs from $\mathrm{id}_M$ to $kr$, fixing $k(Y)$. By [F4] and step 1.1, $j$ is bijective on components and $\pi_n(M,X,j(x))$ is trivial for every $x$ and $n\ge1$. These are exactly the hypotheses of [F5] for the CW pair $(M,j(X))$. [F3, F4, F5, step 1.1]

3.1 Apply [F5] to obtain a continuous $\rho:M\to X$ with $\rho j=\mathrm{id}_X$ and a homotopy $K:\mathrm{id}_M\simeq j\rho$ fixing $j(X)$. If $X,Y$ are finite, [F3] lists the cells of $M\setminus j(X)$ as the cells of $Y$ and one prism for each cell of $X$, a finite family. Hence the finite clause of [F5] applies and needs no choice. For arbitrary $X,Y$, use its [A1] clause. These are the only second-stage choices; the mapping-cylinder construction itself was specified without choices. [F3, F5, A1, step 2.1]

4.1 Put $h=\rho k:Y\to X$. The homotopy $(x,t)\mapsto\rho D(j(x),t)$ starts at $\rho j=\mathrm{id}_X$ and ends at $\rho krj=\rho kg=hg$. The homotopy $(y,t)\mapsto rK(k(y),t)$ starts at $rk=\mathrm{id}_Y$ and ends at $rj\rho k=gh$. Thus $hg\simeq\mathrm{id}_X$ and $gh\simeq\mathrm{id}_Y$, with continuous homotopies supplied by these formulas. By [F6], $h$ is a homotopy inverse of $g$. [F6, step 2.1, step 3.1]

5.1 Composing $E$ with $h$ on the left and right gives $hf\simeq hg$ and $fh\simeq gh$. Concatenating with the reversals of the two homotopies in step 4.1 yields $hf\simeq\mathrm{id}_X$ and $fh\simeq\mathrm{id}_Y$. This proves that the original $f$, rather than just its cellular replacement, is a homotopy equivalence. No based inverse is asserted for an arbitrary unbased map. [F6, step 1.1, step 4.1]

6.1 If $X$ is empty, weak equivalence forces $Y$ empty by the component condition; the unique maps give the conclusion. Zero relative cells in step 3.1 give the stationary compression, and zero-dimensional cells and coincident endpoint images are covered by the cylinder construction. Neither disconnectedness nor unbounded dimension is excluded: [F1], [F4] and [F5] use every source point and the component bijection. The finite case uses only the finite clauses in steps 1.1 and 3.1. In the arbitrary case AC selects the disk deformations for cellular approximation and the compression witnesses for the source retraction, exactly as accounted for in those two suppliers. The explicit compositions in steps 4.1–5.1 introduce no further choice and check both inverse identities. [F1, F3, F4, F5, A1, step 1.1, step 3.1, step 4.1, step 5.1] ∎
