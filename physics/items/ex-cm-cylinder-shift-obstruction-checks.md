---
id: ex-cm-cylinder-shift-obstruction-checks
kind: example
title: "The unit cylinder shift: explicit local generating function, loop integral and global failure"
status: published
origin: pipeline
domain: mathematics
dependency_level: 7
deps: [prop-cm-cylinder-shift-has-no-global-generating-function, def-cm-generating-function-of-the-first-and-second-kind, def-the-one-dimensional-torus-and-normalized-haar-integral, thm-newton-leibniz-with-interior-derivative, thm-chain-rule-for-total-derivatives, def-ck-euclidean-maps-and-diffeomorphisms, def-directional-and-partial-derivatives, def-interval]
dependency_roles:
  prop-cm-cylinder-shift-has-no-global-generating-function: mathematical-premise
  def-cm-generating-function-of-the-first-and-second-kind: mathematical-premise
  def-the-one-dimensional-torus-and-normalized-haar-integral: mathematical-premise
  thm-newton-leibniz-with-interior-derivative: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-directional-and-partial-derivatives: mathematical-premise
  def-interval: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "D. Tong, Classical Dynamics (University of Cambridge Part II Mathematical Tripos), Sections 4.4.3 and 4.5 (generating functions and angle variables on the cylinder), printed pages 104-112"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    - title: "D. Cline, Variational Principles in Classical Mechanics (2nd edition, University of Rochester River Campus Libraries, open textbook, CC BY-NC-SA 4.0), Sections 15.3-15.4 (canonical transformations and their global behaviour)"
      url: "https://downloads.libretexts.org/api/v1/download/phys-9557/pdf"
verification:
  precheck: pass
---

## Example

Take the cylinder $C=(\mathbb R/\mathbb Z)\times\mathbb R$ with the shift
$\Phi(\theta,I)=(\theta,I+1)$, i.e. $a=1$ in
[[prop-cm-cylinder-shift-has-no-global-generating-function]], and with the descended forms
$\lambda_C,\omega_C$ of that proposition. Then:

1. $\Phi^*\lambda_C=\lambda_C+d\theta_C$ and $\Phi^*\omega_C=\omega_C$;
2. the loop $\gamma(t)=\pi(t,0)$, $t\in[0,1]$, satisfies
   $\int_0^1 d\theta_C(\gamma'(t))\,dt=1\ne0$, confirming that $d\theta_C$ is not exact on $C$;
3. on the chart $\{\theta\in(0,1)\}$ the second-kind generating function
   $S(\theta,P)=\theta P-\theta$ generates the shift; globally no such $C^1$ function exists.

## Facts & Assumptions

**Given:** The cylinder $C$, the shift $\Phi$, the descended forms and the loop $\gamma$.

[F1] The proposition [[prop-cm-cylinder-shift-has-no-global-generating-function]] establishes clauses 1 and 2 in general form for $a\ne0$; for $a=1$ the identities read $\Phi^*\lambda_C-\lambda_C=d\theta_C$ and $\int_0^1d\theta_C(\gamma'(t))\,dt=1$. [F1]

[F2] The second-kind relations and the local chart ([[def-cm-generating-function-of-the-first-and-second-kind]]): for $\theta$ in an open interval of length one, $S(\theta,P)=\theta P-\theta$ satisfies $S_\theta=P-1$, $S_P=\theta$ and $S_{\theta P}=1$, so it generates the map that sends $(\theta,I)$ with $I=P-1$ to $(Q,P)=(\theta,I+1)$; on the chart $S$ is a $C^\infty$ function.

## Verification

**Proof technique:** direct; specialise the general identities to $a=1$, compute the loop integral, and check the generating relations on a chart.

1.1 Clause 1 is [F1] specialised to $a=1$: $\Phi^*\lambda_C=\lambda_C+d\theta_C$ and $\Phi^*\omega_C=\omega_C$; clause 2 is the same proposition's non-exactness statement, whose proof integrates $d\theta_C$ along $\gamma$ to $1$. [F1]

2.1 Clause 3: on the chart $\theta\in(0,1)$ the derivatives of [F2] satisfy the second-kind relations $p=S_\theta=P-1$ and $Q=S_P=\theta$ with $S_{\theta P}=1\ne0$; the generated map is $(\theta,I)\mapsto(\theta,I+1)$, which is the shift, so $S$ generates $\Phi$ on the chart. Globally, [[prop-cm-cylinder-shift-has-no-global-generating-function]] clause 3 (with $a=1$) excludes any global $C^1$ generating function: a $1$-periodic lift $\hat S$ would satisfy $\hat S_P=\theta+m$ for a constant integer $m$ and $\hat S_\theta=P-1$, hence $\hat S(\theta,P)=\theta P+mP+c(\theta)$ with $c'=-1$, so $c(1)-c(0)=-1\ne0$ by the fundamental theorem of calculus, contradicting the periodicity $c(1)=c(0)$. [F1, F2, algebra] ∎
