---
id: "thm-lc-strong-compactness-fine-measures-and-logic"
kind: "theorem"
title: "Strong compactness, fine measures and infinitary logic"
deps: ["def-lc-fine-ultrafilters-strong-compactness-and-supercompactness", "thm-lc-infinitary-los", "def-axiom-of-choice"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Monk Theorem 20.2 p.431; explicit complement axiom and L_(kappa,kappa)
        extension
      url: https://euclid.colorado.edu/~monkd/jech.pdf
provenance:
  statement: ai-altered
  proof: ai-generated
status: "draft"
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

In ZFC, for a regular uncountable cardinal kappa, the following are equivalent: kappa is strongly compact; every P_kappa(lambda), for a cardinal lambda>=kappa, carries a fine kappa-complete ultrafilter; every less-than-kappa satisfiable set-sized $L_{\kappa,\kappa}$ theory has a model; and the same compactness assertion holds for $L_{\kappa,\omega}$. Languages may have arbitrary set size.

## Facts & Assumptions

**Given:** ZFC. Proved cone-filter completeness, transported fine measures to small subtheories, selected local models via least ranks, applied infinitary Los, and supplied the complete propositional filter-extension converse.

[F1] [[def-lc-fine-ultrafilters-strong-compactness-and-supercompactness]]: Strong compactness is filter extension; fine measures have their point-cone condition.

[F2] [[thm-lc-infinitary-los]]: Kappa-complete ultraproducts satisfy the infinitary truth equivalence.

[F3] [[def-axiom-of-choice]]: AC selects bounded-rank local models and is used with regularity for small unions.

## Proof

1.1 Assume filter extension and fix lambda>=kappa. For a in P_kappa(lambda), let C_a be the cone of x containing a. The sets containing some C_a form a proper filter: every cone contains a itself, and C_a intersect C_b=C_(a union b). An intersection of eta<kappa such filter members contains the cone above the union of their witnessing a_xi. F3 selects those witnesses; regularity makes their union have size below kappa (bound all sizes below one cardinal below kappa and use the infinite-cardinal product bound). Thus the filter is kappa-complete. Extend it by F1. Since C_{alpha} belongs to it for each alpha<lambda, the extension is fine. [F1, F3]

2.1 Assume the fine-measure assertion and fix a theory T as in the L_(kappa,kappa) assertion. Choose a cardinal lambda>=kappa and an injection e:T to lambda. Push a fine measure on P_kappa(lambda) forward by $x\mapsto e^{-1}[x]$ to get a proper kappa-complete ultrafilter W on P_kappa(T). Inverse images preserve all intersections and complements, proving these laws. For every t in T, the inverse image of the cone of small subtheories containing t contains the e(t)-cone, so W is fine. [F1, F3, step 1.1]

3.1 Each small subtheory a has a set model in the common signature. For each a take the least rank rho_a of such a model code. This is uniquely defined by set satisfaction, and Replacement collects the ranks. Separation in V_(rho_a+1) gives the nonempty set of rank-rho_a model codes satisfying a; F3 chooses one for each a. This bounds the choices before AC and does not choose from classes of models. Take their set ultraproduct by W. For each t in T the coordinate truth set contains the cone of a containing t, hence is in W. F2 makes t true in the ultraproduct. Thus T has a model. The L_(kappa,omega) assertion follows by restriction of syntax. [F2, F3, step 2.1]

4.1 Assume the L_(kappa,omega) assertion and let F be a proper kappa-complete filter on a set I. Introduce one constant d and one unary relation R_X for every subset X of I; abbreviate R_X(d) by r_X. Include r_I, not r_empty, the equivalences $r_{I\setminus X}\leftrightarrow\neg r_X$, and $r_{\bigcap_{\xi<\eta}X_\xi}\leftrightarrow\bigwedge_{\xi<\eta}r_{X_\xi}$ for every eta<kappa and every such sequence of subsets. Also include r_X for each X in F. This is a set theory in L_(kappa,omega), using no quantifier blocks. For any subtheory of size below kappa, the fewer-than-kappa F-members explicitly required have a nonempty intersection by completeness and properness. Take i in it and interpret the predicates on a one-element carrier by r_X true exactly when i belongs to X. Every identity axiom is then true, even those mentioning other subsets, and all the chosen F-requirements hold. Empty collections use I, which is nonempty since F is proper. [F1, F3, step 3.1]

5.1 Compactness yields a full model. Define U to be the subsets X for which r_X is true there. The top and bottom axioms give properness. The intersection identities give kappa-completeness; their binary instances also give upward closure, since X subset Y implies X intersect Y=X and r_X forces r_Y. Complement identities decide exactly one of X and its complement. Thus U is a kappa-complete ultrafilter, and the F-requirements give F subset U. This proves filter extension, closing the cycle of equivalences. [F1, step 4.1] ∎
