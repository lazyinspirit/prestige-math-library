---
id: def-effective-interpretation-and-proof-translation
kind: definition
title: "Interpretations with proof-translation data"
status: published
verification:
  audited: 2026-09-10
origin: pipeline
deps: [def-set-coded-formal-derivation, def-effective-theory-and-certified-godel-numbering, lem-primitive-recursive-syntax-and-proof-checking]
provenance:
  statement: "ai-altered"
  proof: "not-applicable"
sources:
  references:
    - title: "Moschovakis, Lecture Notes in Logic (2014) — Definition 4C.1 pp150–151, strengthened local domain/quotient interface"
      url: "https://www.math.ucla.edu/~ynm/lectures/lnl.pdf"
---


## Definition

An interpretation of a sentence theory S in T specifies formulas D(x) and E(x,y), invariant relation formulas, and functional graph formulas. T proves D nonempty, E an equivalence on D, invariance under E of all relations and graphs, and totality and uniqueness modulo E of each function graph on domain-valued inputs. Fixed parameters are target constants. No other free variables occur in the interpretation data.

Define a domain-valued term graph by $V_x(z):=D(z)\land E(x,z)$ and $V_{f(\bar t)}(z):=D(z)\land\exists\bar u(\bigwedge_iV_{t_i}(u_i)\land F_f(\bar u,z))$; the nullary case uses the constant graph. Atomic relations and equality quantify term values and then apply the interpreted relation or E. Translation commutes with negation/conjunction and replaces $\exists x\phi$ by $\exists x(D(x)\land\phi^I)$, always using fresh bound variables. T must prove every translated source axiom.

For a source formula $\phi$ put $G_{\mathrm{FV}(\phi)}=\bigwedge_{v\in\mathrm{FV}(\phi)}D(v)$. Its guarded proof translation is $G_{\mathrm{FV}(\phi)}\to\phi^I$. For sentences the empty guard is a fixed tautology.

For the following effective and formalized layers, fix separately for S and T the effectively presented countable finite-arity signatures, primitive-recursive symbol-kind/arity tests, primitive-recursive axiom-certificate predicates, and sentinel numerical encoding of [[def-effective-theory-and-certified-godel-numbering]]. All syntax, annotations and certified derivations use those presentations. Write $\operatorname{Prf}_S(p,a)$ and $\operatorname{Prf}_T(q,b)$ for the corresponding certified proof-checking predicates, with proof code first; malformed inputs are rejected. The abstract interpretation above does not require effective signatures.

Effective certificate data supplies the interpretation formulas uniformly effectively from source symbol codes, target certificates for their interpretation obligations uniformly effectively, and a target translation certificate effectively from each certified source axiom. Fix increasing variable-index order for guards, a fixed closed tautology for the empty guard, and a deterministic fresh-variable convention. Thus the guarded formula translation has a definite numerical code.

Formalized proof-translation data additionally specifies an arithmetic base $B$, total primitive-recursive functions $t,r:\mathbb N\to\mathbb N$, and chosen arithmetic representations of these functions and the two certified proof predicates. On source formula codes, $t$ codes the guarded translation; on nonformula inputs set $t=0$. The representations must describe these numerical functions and predicates, and $B$ must prove totality and single-valuedness of the function graphs and the uniform correctness assertion

$$B\vdash\forall p\,\forall a\bigl(\operatorname{Prf}_S(p,a)\to\operatorname{Prf}_T(r(p),t(a))\bigr).$$

Function notation here abbreviates the chosen graph formulas; with graphs $R(p,q)$ for r and $H(a,b)$ for t, the assertion is $B\vdash\forall p\,\forall a\,\forall q\,\forall b((\operatorname{Prf}_S(p,a)\land R(p,q)\land H(a,b))\to\operatorname{Prf}_T(q,b))$. The value of r on invalid proof inputs is immaterial, but r is total on all natural numbers. These verifications are required data, not consequences of correctness on standard numerals alone.

For contradiction transfer use the fixed sentence $\bot=\exists v_0\neg(v_0=v_0)$ in each signature, with numerical codes $b_S,b_T$. Formalized data also includes the fixed target proof block refuting the translated source contradiction, its primitive-recursive appending/explosion operation c, chosen arithmetic graph representation, and B proofs of its totality, single-valuedness and

$$B\vdash\forall q\bigl(\operatorname{Prf}_T(q,t(\overline{b_S}))\to\operatorname{Prf}_T(c(q),\overline{b_T})\bigr).$$

Here overlines denote numerals, and c is interpreted by its graph as above. Composing c with r gives the B-verified map from S-contradiction certificates to T-contradiction certificates. Effectiveness alone supplies neither primitive recursiveness of all these data nor their verification in B; mere totality of a map does not satisfy the correctness requirements.

Use [[def-set-coded-formal-derivation]] for the calculus and [[lem-primitive-recursive-syntax-and-proof-checking]] for the finite numerical operations. Logical theorem preservation is a conclusion of the next lemma, not an interpretation axiom. No quotient representatives or choice function are specified.
