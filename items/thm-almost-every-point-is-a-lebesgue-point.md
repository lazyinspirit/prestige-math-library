---
id: thm-almost-every-point-is-a-lebesgue-point
kind: theorem
title: "Almost every point is a Lebesgue point of a locally integrable function"
status: published
origin: session
landmark: true
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-countable-choice, def-lebesgue-point-and-lebesgue-set, def-measure-null-set-and-almost-everywhere, lem-rat-embeds-dense, thm-countable-union-of-null-is-null, thm-product-of-countable, thm-rationals-countable, thm-lebesgue-differentiation-theorem-for-locally-integrable-functions-on-r-n]
proof_strategy: direct
verification:
  audited: 2026-09-04
  precheck: pass
sources:
  references:
    - title: "Gerald B. Folland, Real Analysis: Modern Techniques and Their Applications, 2nd ed., Theorem 3.20"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
    - title: "Walter Rudin, Real and Complex Analysis, 3rd ed., Theorem 7.7"
      url: "https://web.archive.org/web/20221029120924if_/https://perso.telecom-paristech.fr/decreuse/_downloads/c22155fef582344beb326c1f44f437d2/rudin.pdf"
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]).

Let $f\in L^1_{\mathrm{loc}}(\mathbb{R}^n)$. Then the Lebesgue set of the
$L^1_{\mathrm{loc}}$ class of $f$ has full Lebesgue measure.

Equivalently, for almost every $x\in\mathbb{R}^n$,
$$\lim_{r\to0^+}\frac{1}{\lambda(B(x,r))} \int_{B(x,r)}|f(y)-f(x)|\,d\lambda(y)=0.$$

## Facts & Assumptions

**Given:** The Axiom of Countable Choice and a locally integrable function $f$ on $\mathbb{R}^n$.

[L1] A point belongs to the Lebesgue set exactly when the averaged oscillation above tends to $0$. ([[def-lebesgue-point-and-lebesgue-set]])

[L2] A property holds almost everywhere when its exceptional set is contained in a measurable null set. ([[def-measure-null-set-and-almost-everywhere]])

[L3] The rationals are countably infinite, and the product of two at most countable sets is at most countable. ([[thm-rationals-countable]], [[thm-product-of-countable]])

[L4] Rationals are dense in the reals. ([[lem-rat-embeds-dense]])

[L5] A countable union of null sets is null. ([[thm-countable-union-of-null-is-null]])

[L6] If $u\in L^1_{\mathrm{loc}}(\mathbb{R}^n)$, then $A_ru(x)\to u(x)$ for almost every $x$. ([[thm-lebesgue-differentiation-theorem-for-locally-integrable-functions-on-r-n]])

## Proof

**Proof technique:** direct.

1.1 Let [L3, L5, L6, given, construct] $$D:=\{a+ib:a,b\in\mathbb{Q}\}.$$ By [L3], $D$ is countable. For each $c\in D$, the function $u_c:=|f-c|$ is locally integrable, so [L6] gives a null set $N_c$ such that $$\lim_{r\to0^+}A_ru_c(x)=u_c(x)=|f(x)-c|$$ for every $x\notin N_c$. Put $$N:=\bigcup_{c\in D}N_c.$$ By [L5], $N$ is null. [L3, L5, L6, given, construct]

2.1 Fix $x\notin N$ and let $\varepsilon>0$. By density [L4], choose [step 1.1, L4, algebra] $c\in D$ with $|f(x)-c|<\varepsilon$. Then for every $r>0$, $$\frac{1}{\lambda(B(x,r))}\int_{B(x,r)}|f(y)-f(x)|\,d\lambda(y) \le A_r|f-c|(x)+|c-f(x)|.$$ Taking $r\to0^+$ and using step 1.1 gives $$\limsup_{r\to0^+}\frac{1}{\lambda(B(x,r))} \int_{B(x,r)}|f(y)-f(x)|\,d\lambda(y) \le 2\varepsilon.$$ Since $\varepsilon$ is arbitrary, the limit is $0$. [step 1.1, L4, algebra]

3.1 Step 2.1 holds for every $x\notin N$, and $N$ is null. By [L1] and [L2], [L1, L2, step 1.1, step 2.1] the Lebesgue set of the class of $f$ has full measure. [L1, L2, step 1.1, step 2.1] ∎
