---
id: def-dyadic-floating-point-format-and-directed-rounding
kind: definition
title: Dyadic floating-point format and directed rounding
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
page: outward-rounded-interval-and-ball-arithmetic
dependency_level: 1
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-complete-ordered-real-field]
verification:
  precheck: n/a
sources:
  references:
    - title: "Tucker, Validated Numerics: A Short Introduction to Rigorous Computations, Ch. 1 Computer Arithmetic"
      url: "https://pup-assets.imgix.net/onix/images/9780691247656/9780691247656.pdf?fm=pdf"
    - title: "Rump, Verification methods: Rigorous results using floating-point arithmetic, §4"
      url: "https://www.tuhh.de/ti3/rump/intlab/ActaNumerica2010.pdf"
---

## Definition

An exact dyadic rational is a number $m2^q$ with integers $m,q$.
Fix integers $p\ge2$ and $e_{\min}\le e_{\max}$. Put
$\eta=2^{e_{\min}-p+1}$ and
$N_{\max}=(2^p-1)2^{e_{\max}-p+1}$. The finite representable set $\mathbb F$
consists of zero, both signs of every normal number $k2^{e-p+1}$ with
$e_{\min}\le e\le e_{\max}$ and $2^{p-1}\le k<2^p$, and both signs of every
subnormal number $k\eta$ with $1\le k<2^{p-1}$. The smallest positive
subnormal is $\eta$, the smallest positive normal is $2^{e_{\min}}$, and the
largest finite magnitude is $N_{\max}$. The extended endpoint set also contains
$-\infty$ and $+\infty$ as enclosure sentinels; they are not finite machine
numbers.

For a real $x$ with $|x|\le N_{\max}$, define $\operatorname{rd}(x)$ as the
greatest member of $\mathbb F$ not exceeding $x$, and $\operatorname{ru}(x)$ as
the least member of $\mathbb F$ not less than $x$. Define
$\rho(x)=\operatorname{ru}(x)-\operatorname{rd}(x)$. Set $\epsilon_{\rm abs}(0)=0$. For nonzero $x$ in the
subnormal range, define the absolute-error bound $\epsilon_{\rm abs}(x)=\eta$;
for $2^e\le |x|<2^{e+1}$ in the normal range, define
$\epsilon_{\rm abs}(x)=2^{e-p+2}$. At finite overflow, a directed result is
the corresponding infinite sentinel and its error bound is $+\infty$; the
status is `overflow`. The rounding procedure reports `finite`, `subnormal`, or
`overflow`, so no relative-error assumption is implicit.

An exact rational intermediate may be converted by comparing integer
numerators and denominators after clearing powers of two. A directed interval
endpoint is the resulting greatest lower or least upper member of $\mathbb F$.

