---
id: ex-zero-module-associated-prime-boundary
kind: example
title: "The zero module has empty support and no associated primes"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: example
deps: [def-associated-prime-of-a-module, def-primary-submodule-and-primary-ideal, def-support-of-a-module]
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-28
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Section 10.63: Associated primes"
      url: "https://stacks.math.columbia.edu/tag/00L9"
    - title: "A. Altman and S. Kleiman, A Term of Commutative Algebra, 13th ed., §17-§18"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
---

## Example

For the zero $R$-module,
$$ \operatorname{Ass}_R(0)=\varnothing \qquad\text{and}\qquad \operatorname{Supp}_R(0)=\varnothing. $$
Also the primary-submodule definition does not apply to $0 \subseteq 0$, because
it requires a proper submodule.

## Facts & Assumptions

**Given:** A commutative ring $R$ and the zero $R$-module.

[L1] Associated primes are prime annihilators of elements ([[def-associated-prime-of-a-module]]).

[L2] Support consists of the primes whose localization is nonzero ([[def-support-of-a-module]]).

[L3] Primaryity is defined only for proper submodules ([[def-primary-submodule-and-primary-ideal]]).

## Verification

**Proof technique:** direct.

1.1 The only element of the zero module is $0$, and its annihilator is the whole ring $R$, which is not a prime ideal of itself. Therefore [L1] gives $\operatorname{Ass}_R(0)=\varnothing$. [L1, given, algebra]

1.2 Every localization of the zero module is again the zero module, so [L2] gives $\operatorname{Supp}_R(0)=\varnothing$. [L2, given]

1.3 The inclusion $0 \subseteq 0$ is not proper, so [L3] shows that it is not a candidate for the primary-submodule definition. This is the exact boundary that prevents a vacuous use of primaryity at the zero module. [L3, given]

2.1 Thus the zero module sits outside associated-prime and primaryity claims in exactly the stated way. [step 1.1, step 1.2, step 1.3] ∎
