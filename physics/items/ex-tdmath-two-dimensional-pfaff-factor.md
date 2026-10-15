---
id: ex-tdmath-two-dimensional-pfaff-factor
kind: example
title: "A two-dimensional Pfaff form with a global integrating factor"
status: published
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 1
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [def-tdmath-one-form-and-horizontal-path, thm-chain-rule-for-total-derivatives]
dependency_roles:
  def-tdmath-one-form-and-horizontal-path: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
proof_strategy: direct
sources:
  references:
    - title: "Ko Honda, Differential Geometry Course Notes, §33, full lecture notes"
      url: "https://www.math.ucla.edu/~honda/math225a/revised%20course%20notes.pdf"
verification:
  verified:
    model: "gpt-6-luna, gpt-6.1-sol, and delegated Codex review/repair agents; see completed run evidence"
    verdict: "Owner accepted completed review and adjudication evidence for publication"
    date: "2026-10-15"
    scope: "Owner accepted completed delegated review and resolved adjudication evidence from research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json for publication. No new mathematical audit or source retrieval performed for publication; outside-frontier supplier limitations remain as recorded in the final report."
    evidence: "research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json"
    publication: "research/physics-td-qft-rpm-62-2026-10-14-publication-2026-10-15.json"
    delegated_by: "owner; publication instruction 2026-10-15"
  precheck: n/a
---

## Example

On $U=\{(x,y)\in\mathbb R^2:x>-1\}$, let $\omega=2y\,dx+(1+x)\,dy$. Its coefficients are polynomials and its $dy$ coefficient is positive, so it is a $C^2$ nowhere-zero one-form. The functions $\mu(x,y)=1+x$ and $S(x,y)=(1+x)^2y$ satisfy $\mu>0$ and $dS=\mu\omega$ on all of $U$.

## Facts & Assumptions

**Given:** The displayed smooth one-form on $U$ and the coordinate definitions of $dS$ and an integrating factor.

[F1] [[def-tdmath-one-form-and-horizontal-path]]: a nonsingular one-form is a continuously varying covector, and $dS$ has its coordinate partial derivatives as coefficients.

[F2] [[thm-chain-rule-for-total-derivatives]]: composition with a $C^1$ path differentiates by the total-derivative chain rule.

## Verification

1.1 The first derivatives of the coefficients $2y$ and $1+x$ are $0,2$ and $1,0$, respectively, and all their second partial derivatives vanish; hence $\omega$ is $C^2$ and nowhere zero. Expanding $S(x,y)=(1+x)^2y$ gives $S(x+h,y+k)-S(x,y)=2y(1+x)h+(1+x)^2k+2(1+x)hk+yh^2+h^2k$. The last three terms divided by $\sqrt{h^2+k^2}$ tend to zero as $(h,k)\to(0,0)$, so $dS_{(x,y)}(h,k)=2y(1+x)h+(1+x)^2k$. These first derivative coefficients have continuous first partials $S_{xx}=2y$, $S_{xy}=S_{yx}=2(1+x)$ and $S_{yy}=0$, so $S\in C^2$. Thus $dS=2y(1+x)\,dx+(1+x)^2\,dy=(1+x)\omega=\mu\omega$. Because $1+x>0$ on $U$, both $\mu$ and $dS$ are nowhere zero. [given, algebra]

2.1 For any piecewise-$C^1$ horizontal path $\gamma$, the identity in step 1.1 and [F1]–[F2] give $(S\circ\gamma)'=dS(\dot\gamma)=\mu\omega(\dot\gamma)=0$ on the interior of each smooth piece. Thus every horizontal tangent lies in $\ker dS=\ker\omega$ along that piece. [given, F1, F2, step 1.1, algebra] ∎
