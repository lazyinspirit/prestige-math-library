---
id: ex-dilation-action-classical-brst-cohomology
kind: example
title: BRST cohomology for the dilation action
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 2
deps:
  - def-classical-lie-action-brst-complex
  - thm-classical-lie-action-brst-differential-squares-zero
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pass
sources:
  references:
    - title: "Charles A. Weibel, An Introduction to Homological Algebra, §7.7, Lie Algebra Homology and Cohomology"
      url: "https://math.mit.edu/~hrm/palestine/weibel/07-lie_algebra_homology_and_cohomology.pdf"
      locator: "§7.7, cochains and the Chevalley–Eilenberg coboundary, printed pp. 239–241 (PDF pp. 23–25); the local computation specializes that complex."
---

## Example

Let $\mathfrak g=\mathbb C e$ be the one-dimensional abelian Lie algebra and
let $A=\mathbb C[x]$. Give $A$ the action by derivations
$\rho(e)=x\frac{d}{dx}$. Then the classical BRST cohomology is
$$H^0_{\mathrm{BRST}}(\mathfrak g,A)\cong\mathbb C,\qquad H^1_{\mathrm{BRST}}(\mathfrak g,A)\cong\mathbb C,\qquad H^n_{\mathrm{BRST}}(\mathfrak g,A)=0\quad(n\geq2).$$

## Facts & Assumptions

**Given:** The cochains, differential, and cohomology quotient in
[[def-classical-lie-action-brst-complex]] and
[[thm-classical-lie-action-brst-differential-squares-zero]].

[F1] [[def-classical-lie-action-brst-complex]]: $C^n=\operatorname{Hom}_{\mathbb C}(\Lambda^n\mathfrak g,A)$ and $d f(e)=x f'(x)$ in degree $0$ for this action.

[F2] [[thm-classical-lie-action-brst-differential-squares-zero]]:
$H^n_{\mathrm{BRST}}=\ker d^n/\operatorname{im}d^{n-1}$ is defined because $d^2=0$.

## Verification

1.1 The operator $x\frac{d}{dx}$ is a derivation; for the one-dimensional abelian $\mathfrak g$, its assignment to $e$ is a representation because $[\rho(e),\rho(e)]=0=\rho([e,e])$. Thus this is an admissible input for [F1]. [given, F1, construct, algebra]

1.2 Since $\Lambda^0\mathfrak g=\mathbb C$, $\Lambda^1\mathfrak g=\mathfrak g$, and $\Lambda^n\mathfrak g=0$ for $n\geq2$, the only nonzero cochains are $C^0\cong\mathbb C[x]$ and $C^1\cong\mathbb C[x]$; [F1] gives $df=x f'$ and $d:C^1\to C^2=0$. [F1, algebra]

1.3 For $f=\sum_{r=0}^N a_r x^r$, $x f'=\sum_{r=1}^N r a_r x^r$; characteristic zero makes each $r\geq1$ invertible, so the kernel is $\mathbb C$ and $H^0_{\mathrm{BRST}}\cong\mathbb C$ by [F2]. [F1, F2, algebra]

2.1 The image of $x\frac{d}{dx}$ is exactly $x\mathbb C[x]$: every output has zero constant term and $x^r$ is the image of $x^r/r$ for $r\geq1$. Hence $H^1_{\mathrm{BRST}}\cong\mathbb C[x]/x\mathbb C[x]\cong\mathbb C$, while $C^n=0$ gives $H^n=0$ for $n\geq2$. [F1, F2, step 1.2, algebra] ∎
