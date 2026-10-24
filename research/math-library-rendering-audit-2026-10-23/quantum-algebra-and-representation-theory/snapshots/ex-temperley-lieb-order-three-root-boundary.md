---
id: ex-temperley-lieb-order-three-root-boundary
kind: example
title: "At the order-three root the trace degenerates on a semisimple block"
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 9
deps:
  - thm-temperley-lieb-root-negligible-quotient-is-semisimple
  - thm-temperley-lieb-complex-semisimplicity-classification
  - def-temperley-lieb-quantum-integers-and-quantum-characteristic
  - def-temperley-lieb-jones-wenzl-recursion-over-unit-denominators
  - lem-temperley-lieb-jones-wenzl-partial-trace-and-uniqueness
  - def-temperley-lieb-closure-trace-and-partial-trace
  - thm-temperley-lieb-diagram-generators-span
  - def-temperley-lieb-diagram-category
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "K. Iohara, G. I. Lehrer, and R. B. Zhang, The Jones Quotients of the Temperley-Lieb Algebras"
      url: "https://arxiv.org/pdf/1702.08128"
      locator: "§§2–3 and §5, printed pp. 3–8 and 13–16: first boundary, quotient, and low-rank cases."
    - title: "Joshua Chen, The Temperley-Lieb Categories and Skein Modules"
      url: "https://arxiv.org/pdf/1502.06845"
      locator: "§§2.3 and 5.2–5.4, PDF pp. 20–24 and 47–55: projector trace and root quotient."
---

## Example

Set $\ell=3$, $q=e^{\pi i/3}$ and $\delta=q+q^{-1}=1$. Then $[2]=1$ and $[3]=0$, so $p_2=1_2-U_1$ is defined and is a nonzero idempotent of trace zero. In the basis $(1_2,U_1)$, the unnormalized trace pairing has matrix

$$\begin{pmatrix}1&1\\1&1\end{pmatrix}.$$

Thus the trace radical is $\mathbb C(1_2-U_1)$, although $\mathrm{TL}_2(\mathbb C,1)\cong\mathbb C\oplus\mathbb C$ is semisimple. Its negligible quotient is one-dimensional.

## Facts & Assumptions

**Given:** The order-three parameter, the rank-two generator relation, and the closure trace.

[F1] At order $\ell=3$, the complex semisimplicity criterion gives semisimplicity of $\mathrm{TL}_{\ell-1}=\mathrm{TL}_2$ ([[thm-temperley-lieb-complex-semisimplicity-classification]]).

[F2] The quantum integer recurrence has $[1]=1$, $[2]=\delta$, $[3]=\delta[2]-1$ ([[def-temperley-lieb-quantum-integers-and-quantum-characteristic]]).

[F3] The two-strand recursion and trace identities give $p_2=1-([1]/[2])U_1$, $p_2^2=p_2$, and $\operatorname{Tr}_2(p_2)=[3]$ ([[def-temperley-lieb-jones-wenzl-recursion-over-unit-denominators]], [[lem-temperley-lieb-jones-wenzl-partial-trace-and-uniqueness]]).

[F4] Closure assigns $\delta^2$ to $1_2$ and $\delta$ to $U_1$ ([[def-temperley-lieb-closure-trace-and-partial-trace]]).

[F5] The rank-two diagrams $1_2,U_1$ are distinct basis vectors and $U_1$ generates the algebra ([[def-temperley-lieb-diagram-category]], [[thm-temperley-lieb-diagram-generators-span]]).

## Verification

**Proof technique:** direct calculation.

1.1 Since $q=e^{\pi i/3}$, $q+q^{-1}=2\cos(\pi/3)=1$. Substituting $\delta=1$ into [F2] gives $[2]=1$ and $[3]=0$, so the recursion [F3] is defined and yields $p_2=1-U_1$. The relation $U_1^2=U_1$ gives $p_2^2=1-2U_1+U_1=1-U_1=p_2$; the diagram basis makes $p_2\ne0$. Its trace is $[3]=0$ by [F3]. [F2, F3, given, algebra]

2.1 By [F4], $\operatorname{Tr}_2(1_2)=1$ and $\operatorname{Tr}_2(U_1)=1$. Also $U_1^2=U_1$, so every entry of the trace-pairing matrix in the basis [F5] is $1$. Its kernel is the span of $(1,-1)$, corresponding to $1_2-U_1$. By [F5], $\{1_2,U_1\}$ spans the full two-dimensional algebra; $U_1$ and $1-U_1$ are nonzero orthogonal idempotents summing to $1$, so the algebra is $\mathbb C\oplus\mathbb C$. Quotienting by the block $\mathbb C(1-U_1)$ leaves $\mathbb C$. [F1, F2, F3, F4, F5, step 1.1, algebra] ∎
