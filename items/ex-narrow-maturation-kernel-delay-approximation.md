---
id: ex-narrow-maturation-kernel-delay-approximation
kind: example
title: A narrow maturation kernel approaches a delayed birth term
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - def-age-structured-renewal-transport-problem
  - thm-age-structured-renewal-characteristic-solution
justified_by: []
aliases: []
forward_refs: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Benoît Perthame, Introduction to Structured Equations in Biology, full lecture notes"
      url: "https://www.math.cmu.edu/cna/LectureNotesFiles/Perthame.pdf"
      locator: "Chapter 1, §§1.1.2 and 1.4–1.5, PDF pp. 4–10: Volterra renewal and age/size structured equations."
    - title: "Åke Brännström, Linus Carlsson, and Daniel Simpson, On the Convergence of the Escalator Boxcar Train"
      url: "https://arxiv.org/pdf/1210.1444"
      locator: "§2, PDF pp. 3–5: cohort and weak-measure formulations; the finite-width comparison is proved locally here."
---

## Example

Fix a finite horizon $T\ge a_*+\varepsilon$, $a_*>0$, $R>0$, and $0<\varepsilon<a_*$. Let

$$\rho_\varepsilon(a)=\frac1\varepsilon\left(1-\frac{|a-a_*|}{\varepsilon}\right)_+,$$

where $x_+=\max\{x,0\}$. This is a normalized triangular profile supported on $[a_* -\varepsilon,a_*+\varepsilon]$. Set the fertility to $\beta_\varepsilon(a):=R\rho_\varepsilon(a)$, so $R$ is its total reproduction coefficient. With constant mortality $\mu=m\ge0$, the corresponding point-delay coefficient is $Re^{-ma_*}$; compare the renewal convolution with that coefficient times a Lipschitz birth history delayed by $a_*$.

## Verification

**Given:** The renewal characteristic/Volterra representation and the kernel and birth-history functions defined above.

[F1] [[def-age-structured-renewal-transport-problem]]: mortality survival for duration $a$ under constant rate $m$ is $e^{-ma}$.

[F2] [[thm-age-structured-renewal-characteristic-solution]]: the birth rate satisfies a Volterra equation whose renewal convolution is $\int_0^t\beta(a)S(0,a)B(t-a)\,da$.

1.1 Direct integration gives $\int\rho_\varepsilon(a)\,da=1$ and symmetry about $a_*$ gives $\int a\rho_\varepsilon(a)\,da=a_*$. Its second centered moment is $\int(a-a_*)^2\rho_\varepsilon(a)\,da=\varepsilon^2/6$. [given, algebra]

2.1 Let $b$ be Lipschitz on $[0,T]$ and take $t\ge a_*+\varepsilon$. The support of $\rho_\varepsilon$ is contained in $[0,t]$, so the convolution in [F2] is $H_\varepsilon(t)=R\int\rho_\varepsilon(a)e^{-ma}b(t-a)\,da$. For each supported $a$, $|e^{-ma}b(t-a)-e^{-ma_*}b(t-a_*)|\le(\operatorname{Lip}(b)+m\|b\|_\infty)|a-a_*|$. Since $|a-a_*|\le\varepsilon$ and the kernel has unit mass, $|H_\varepsilon(t)-Re^{-ma_*}b(t-a_*)|\le R\varepsilon(\operatorname{Lip}(b)+m\|b\|_\infty)$. [F1, F2, step 1.1, algebra]

3.1 A finite-width fertility is not an exact delay: set $m=0$ and $b(s)=s^2$ on the relevant nonnegative interval. By step 1.1, $H_\varepsilon(t)=R((t-a_*)^2+\varepsilon^2/6)$, while the point-delay term is $Rb(t-a_*)=R(t-a_*)^2$; their difference is $R\varepsilon^2/6>0$. [step 1.1, step 2.1, algebra] ∎

