---
id: "lem-lc-fine-ultrapower-seed-and-normality"
kind: "lemma"
title: "Fine ultrapower seeds and normality"
deps: ["def-lc-fine-ultrafilters-strong-compactness-and-supercompactness", "thm-lc-countable-completeness-and-well-founded-ultrapowers", "def-axiom-of-choice"]
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Monk Lemmas 20.16–20.20 pp.440–441
      url: https://euclid.colorado.edu/~monkd/jech.pdf
provenance:
  statement: ai-altered
  proof: ai-generated
status: published
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

In ZFC let kappa be regular uncountable, lambda>=kappa a cardinal, and U a fine kappa-complete ultrafilter on P_kappa(lambda). In its collapsed universe ultrapower $j:V\to M$, let $s=\pi([x\mapsto x]_U)$. Then $j``\lambda\subseteq s\subseteq j(\lambda)$ and M satisfies $|s|<j(\kappa)$. U is normal if and only if $s=j``\lambda$. In the normal case $\pi([x\mapsto\operatorname{otp}(x)]_U)=\lambda$ and $j(\kappa)>\lambda$.

## Facts & Assumptions

**Given:** ZFC. Evaluated the identity seed and its internal size by universe Los, proved both normality directions using Scott equality, and identified the normal seed order type externally and internally.

[F1] [[def-lc-fine-ultrafilters-strong-compactness-and-supercompactness]]: Fineness gives each point cone; normality makes a coordinate selection constant on a large set.

[F2] [[thm-lc-countable-completeness-and-well-founded-ultrapowers]]: Countable completeness gives a transitive elementary collapse, with the universe Los schema in its dependency.

[F3] [[def-axiom-of-choice]]: ZFC propagates from the collapse and cardinal-size conventions.

## Proof

1.1 Kappa-completeness and uncountability imply countable completeness, so F2 gives the collapsed ultrapower and its formula-by-formula coordinate equivalence. At every coordinate x, x is a subset of lambda of size below kappa. The equivalence therefore says $s\in j(P_\kappa(\lambda))$: M regards s as a subset of j(lambda) of size below j(kappa). As M is transitive, the subset statement also holds externally. For each alpha<lambda, the coordinate set where alpha belongs to x is U-large by F1, so j(alpha) belongs to s. All cardinal and collapse uses retain F3. [F1, F2, F3]

2.1 Suppose U normal. Any member of s is the collapsed class of a function f which selects f(x) in x on a U-large set S. On S these are ordinals below lambda, so F1 makes some fibre alpha U-large. Scott equality and injectivity of the collapse identify that member with j(alpha). Together with step 1.1 this proves s=j``lambda. Conversely suppose equality. Given f:S to lambda selecting an element of x on a U-large S, extend f by zero outside S. Its collapsed class belongs to s, hence is j(alpha) for some alpha<lambda. Scott equality says the extended f equals alpha on a U-large set. Intersect with S to obtain the required fibre of the original f. Thus U is normal. [F1, F2, step 1.1]

3.1 At each coordinate, x is a set of ordinals, and its order type is below kappa: it has cardinality |x|<kappa and kappa is an initial ordinal. The formula defining the unique ordinal order type transfers by F2. Thus the collapsed class of x maps to otp(x) is the order type of s computed in M, and is below j(kappa). In the normal case the increasing map j restricted to lambda is an external order isomorphism of lambda with s by step 2.1. The order isomorphism supplied inside M is also an external one, since M is transitive and its graph and domain are sets; uniqueness of ordinal order types therefore makes its value exactly lambda. Hence lambda<j(kappa). This does not replace M's internal size bound by an unsupported external cardinal comparison in the merely fine case. [F2, step 1.1, step 2.1] ∎
