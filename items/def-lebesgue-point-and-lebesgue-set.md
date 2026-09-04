---
id: def-lebesgue-point-and-lebesgue-set
kind: definition
title: "Lebesgue points and the Lebesgue set of an $L^1_{loc}$ class"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-ball-average-operator-on-r-n, def-countable-choice, def-locally-integrable-function-on-r-n]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  references:
    - title: "Gerald B. Folland, Real Analysis: Modern Techniques and Their Applications, 2nd ed., Theorem 3.20"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
    - title: "Walter Rudin, Real and Complex Analysis, 3rd ed., Theorem 7.7"
      url: "https://web.archive.org/web/20221029120924if_/https://perso.telecom-paristech.fr/decreuse/_downloads/c22155fef582344beb326c1f44f437d2/rudin.pdf"
---

## Definition

Assume the Axiom of Countable Choice ([[def-countable-choice]]).

Let $[f]\in L^1_{\mathrm{loc}}(\mathbb{R}^n)$
([[def-locally-integrable-function-on-r-n]]).

For a representative $f$ of that class, a point $x\in\mathbb{R}^n$ is a
**Lebesgue point of $f$** if
$$\lim_{r\to0^+}\frac{1}{\lambda(B(x,r))} \int_{B(x,r)}|f(y)-f(x)|\,d\lambda(y)=0.$$

The **Lebesgue set** of the class $[f]$ is the set
$$\operatorname{Leb}([f]):=\{x\in\mathbb{R}^n: \text{ some representative of }[f]\text{ has }x\text{ as a Lebesgue point}\}.$$

The later theorem on Lebesgue points shows that different representatives of the
same $L^1_{\mathrm{loc}}$ class change this set only by a null set.
