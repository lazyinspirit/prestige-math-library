---
id: thm-explicit-definitions-give-conservative-extensions
kind: theorem
title: "Explicit definitions are conservative"
status: draft
origin: pipeline
deps: [def-first-order-syntactic-consistency, def-effective-interpretation-and-proof-translation, lem-interpretation-translates-finite-derivations]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: "Moschovakis, Lecture Notes in Logic (2014) — §4C.1 interpretation framework; conservative extension already defined in published def-first-order-syntactic-consistency"
      url: "https://www.math.ucla.edu/~ynm/lectures/lnl.pdf"
---


## Statement

Adding relation symbols by old-language defining formulas and function symbols by old-language graphs that T proves uniquely total gives a conservative extension of T. The extension is equiconsistent with T. This includes any set of such definitions, since a proof uses only finitely many.

## Facts & Assumptions

[F1] [[def-effective-interpretation-and-proof-translation]]: An interpretation of a sentence theory S in T specifies formulas D(x) and E(x,y), invariant relation formulas, and functional graph formulas. T proves D nonempty, E an equivalence on D, invariance under E of all relations and graphs, and totality and uniqueness modulo E of each function graph on domain-valued inputs. Fixed parameters are target constants. No other free variables occur in the interpretation data.

Define a domain-valued term graph by $V_x(z):=D(z)\land E(x,z)$ and $V_{f(\bar t)}(z):=D(z)\land\exists\bar u(\bigwedge_iV_{t_i}(u_i)\land F_f(\bar u,z))$; the nullary case uses the constant graph. Atomic relations and equality quantify term values and then apply the interpreted relation or E. Translation commutes with negation/conjunction and replaces $\exists x\phi$ by $\exists x(D(x)\land\phi^I)$, always using fresh bound variables. T must prove every translated source axiom.

For a source formula $\phi$ put $G_{\mathrm{FV}(\phi)}=\bigwedge_{v\in\mathrm{FV}(\phi)}D(v)$. Its guarded proof translation is $G_{\mathrm{FV}(\phi)}\to\phi^I$. For sentences the empty guard is a fixed tautology. Effective certificate data provides the required target certificates effectively. Formalized data additionally provides a base-verifiable total primitive-recursive map on proof codes; effectiveness alone does not assert that stronger property.

Use def-set-coded-formal-derivation for the calculus and lem-primitive-recursive-syntax-and-proof-checking for the finite numerical operations. Logical theorem preservation is a conclusion of the next lemma, not an interpretation axiom. No quotient representatives or choice function are specified.

[F2] [[lem-interpretation-translates-finite-derivations]]: An interpretation as defined above sends every S-derivation of $\phi$ to a T-derivation of $G_{\mathrm{FV}(\phi)}\to\phi^I$. In particular a source contradiction gives a target contradiction, so external Con(T) implies Con(S). Effective certificate data gives an effective translation. A formal Con implication additionally follows in any base B that verifies a total map from S-contradiction certificates to T-contradiction certificates.

[F3] [[def-first-order-syntactic-consistency]]: Fix a set signature $L$ and sentence theory $T$, with derivability as in def-set-coded-formal-derivation. Fix the sentence $\bot:=\exists v_0\neg(v_0=v_0)$.

The theory $T$ is **consistent** when $T\nvdash\bot$. It is **syntactically complete** when for every $L$-sentence $\sigma$, $T\vdash\sigma$ or $T\vdash\neg\sigma$. Deductive closure of a sentence theory means closure under its sentence consequences; it does not include open formulas as members.

If $L\subseteq L'$ and $T\subseteq U$ are sentence theories in their respective signatures, $U$ is **conservative over $T$** when every $L$-sentence provable from $U$ is provable from $T$. The reverse preservation follows by retaining the same derivation in the expansion. These are syntactic definitions, including when $T$ is empty; no model existence is asserted.

## Proof

**Given:** An old-language theory T and the specified explicit relation/function definitions with unique-totality proofs.

1.1 Use the interpretation F1 with full domain $D(x):=x=x$ and actual equality $E(x,y):=x=y$. Old symbols have their own actual graphs/relations; new symbols have their given defining formulas. Equality substitution gives invariance, and the stipulated unique totality supplies the function obligations. Relation definitions translate to their defining formulas; function definitions translate to their uniquely total graphs, so T proves the translated defining axioms. All free-variable guards are theorems. [F1, given]

2.1 For an old term t, induction gives $V_t(z)\leftrightarrow z=t$. At a variable this is equality; at an old function node, replace argument witnesses by their old terms using the induction hypothesis, so its graph reduces to $z=f(\bar t)$. Conversely those term values are witnesses. Induction on old formulas now gives $\phi^I\leftrightarrow\phi$: atoms eliminate term-value witnesses, Boolean cases preserve equivalence, and quantifier cases use full-domain guards and fresh-variable quantifier rules. Thus translation is provably equivalent to the old formula, although its witness-expanded syntax is not literally identical. [step 1.1, algebra]

3.1 Translate any extension proof of an old-language sentence phi by F2, remove its tautological guard and apply step 2.1 to get a T proof of phi. This is conservativity in the sense of F3. A refutation is an old-language sentence, so an extension refutation would give a T refutation; conversely a T refutation remains an extension refutation by inclusion. This gives both consistency directions. Each proof uses only finitely many defining symbols and obligation proofs, whose finite assembly is part of F2; no AC or completeness argument is needed. [F2, F3, step 1.1, step 2.1] ∎

