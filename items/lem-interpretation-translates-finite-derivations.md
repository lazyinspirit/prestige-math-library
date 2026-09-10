---
id: lem-interpretation-translates-finite-derivations
kind: lemma
title: "Interpretation transports derivations and inconsistency"
status: draft
origin: pipeline
deps: [def-effective-interpretation-and-proof-translation, def-set-coded-formal-derivation, thm-first-order-sentence-deduction, lem-hilbert-propositional-and-equality-rules, lem-derivation-finite-support-and-concatenation]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
proof_strategy: direct
sources:
  references:
    - title: "Freiburg, Course Notes for Set Theory and Independence Proofs (2024) — Lemma 3.5.12 p54; Moschovakis Definition 4C.1 p150; full proof-map refinement local"
      url: "https://home.mathematik.uni-freiburg.de/maxwell/coursenotes-settheoryandindependenceproofs.pdf"
---


## Statement

An interpretation as defined above sends every S-derivation of $\phi$ to a T-derivation of $G_{\mathrm{FV}(\phi)}\to\phi^I$. In particular a source contradiction gives a target contradiction, so external Con(T) implies Con(S). Effective certificate data gives an effective translation. A formal Con implication additionally follows in any base B that verifies a total map from S-contradiction certificates to T-contradiction certificates.

## Facts & Assumptions

[F1] [[def-effective-interpretation-and-proof-translation]]: An interpretation of a sentence theory S in T specifies formulas D(x) and E(x,y), invariant relation formulas, and functional graph formulas. T proves D nonempty, E an equivalence on D, invariance under E of all relations and graphs, and totality and uniqueness modulo E of each function graph on domain-valued inputs. Fixed parameters are target constants. No other free variables occur in the interpretation data.

Define a domain-valued term graph by $V_x(z):=D(z)\land E(x,z)$ and $V_{f(\bar t)}(z):=D(z)\land\exists\bar u(\bigwedge_iV_{t_i}(u_i)\land F_f(\bar u,z))$; the nullary case uses the constant graph. Atomic relations and equality quantify term values and then apply the interpreted relation or E. Translation commutes with negation/conjunction and replaces $\exists x\phi$ by $\exists x(D(x)\land\phi^I)$, always using fresh bound variables. T must prove every translated source axiom.

For a source formula $\phi$ put $G_{\mathrm{FV}(\phi)}=\bigwedge_{v\in\mathrm{FV}(\phi)}D(v)$. Its guarded proof translation is $G_{\mathrm{FV}(\phi)}\to\phi^I$. For sentences the empty guard is a fixed tautology. Effective certificate data provides the required target certificates effectively. Formalized data additionally provides a base-verifiable total primitive-recursive map on proof codes; effectiveness alone does not assert that stronger property.

Use def-set-coded-formal-derivation for the calculus and lem-primitive-recursive-syntax-and-proof-checking for the finite numerical operations. Logical theorem preservation is a conclusion of the next lemma, not an interpretation axiom. No quotient representatives or choice function are specified.

[F2] [[lem-hilbert-propositional-and-equality-rules]]: In the fixed calculus, Boolean identity, double negation, contraposition, conjunction introduction/elimination and explosion are derivable. Equality is symmetric and transitive and permits free-for formula substitution. Existential introduction, existential monotonicity, quantified double-negation replacement and fresh-variable quantifier renaming are derivable without completeness. Monotonicity means: from $T\vdash\phi\to\psi$ infer $T\vdash\exists x\phi\to\exists x\psi$. Renaming uses a variable $y$ absent from $\phi$.

[F3] [[thm-first-order-sentence-deduction]]: In ZF, for a sentence theory $T$, a sentence $\sigma$ and any formula $\theta$,

$$T\cup\{\sigma\}\vdash\theta\quad\Longleftrightarrow\quad T\vdash\sigma\to\theta.$$

The forward transformation also works for an open discharged assumption $\sigma$ provided every variable generalized or existentially eliminated in the given derivation is absent from $\operatorname{FV}(\sigma)$; the other assumptions remain sentences.

[F4] [[def-set-coded-formal-derivation]]: Fix a set signature $L$ and a set $T$ of $L$-sentences, as in
def-theories-models-and-semantic-consequence. Use exactly the finite
syntax of def-set-coded-terms-and-formulas: negation, conjunction and
existential quantification are primitive. In particular,
$\forall x\phi$ abbreviates $\neg\exists x\neg\phi$ and
$\phi\to\psi$ abbreviates $\neg(\phi\land\neg\psi)$.
Equality below between displayed formulas means equality after expansion of
these abbreviations, not equivalence under first-order semantics.

The logical axioms are all instances of the following schemes. Terms are
arbitrary $L$-terms and formulas may have free variables. Substitution and
the free-for condition are those of
def-free-variables-and-syntactic-substitution.

1. Every propositional tautology instance: substitute formulas for the
   letters of a finite Boolean expression whose value is true for every
   Boolean valuation. Expand Boolean abbreviations first. A quantified
   subformula may be substituted as a whole; first-order validity is not
   the definition of a tautology here.
2. $\forall x\phi\to\phi[t/x]$, when $t$ is free for $x$ in $\phi$.
3. $\forall x(\phi\to\psi)\to(\phi\to\forall x\psi)$, when
   $x\notin\operatorname{FV}(\phi)$.
4. $\phi[t/x]\to\exists x\phi$, when $t$ is free for $x$ in $\phi$.
5. $t=t$.
6. $s=t\to(\phi[s/x]\to\phi[t/x])$, when both $s$ and $t$ are free
   for $x$ in $\phi$.

There are exactly three inference rules:

- Modus ponens: from $\phi$ and $\phi\to\psi$, infer $\psi$.
- Universal generalization: from $\phi$, infer $\forall x\phi$.
- Restricted existential elimination: from $\phi\to\psi$, infer
  $\exists x\phi\to\psi$, provided $x\notin\operatorname{FV}(\psi)$.

A formal derivation from $T$ is a nonempty finite list of formulas, with
each line annotated as an assumption in $T$, a displayed axiom instance,
or an application of one of these rules to specified earlier line indices.
Rule parameters and substitution data are part of the finite annotation.
Write $T\vdash\theta$ when such a derivation ends with $\theta$, and
$\vdash\theta$ when $T=\varnothing$. All formulas, finite annotations
and finite lists range over sets; imposing the displayed line conditions
therefore specifies a set of proof codes, without a choice principle.

The premise that $T$ consists of sentences matters. For the same formal
line rules applied to additional open assumptions, semantic soundness and
discharge require restrictions: a generalized or existentially eliminated
variable must not occur free in the undischarged assumptions on which that
line depends. The sentence deduction theorem automatically satisfies this
restriction; an open-assumption deduction theorem must check both rules.

Existential introduction is an axiom scheme, not a consequence silently
imported from completeness. Neither replacement inside an existential
quantifier nor quantified double-negation equivalence is part of the syntax
convention; each must be derived from these rules when used. Soundness,
deduction, fresh-constant proof transformations and completeness are separate
proof obligations for this specified calculus. Domains are nonempty, as in
the structure convention; no model-existence theorem is assumed here.

[F5] [[lem-derivation-finite-support-and-concatenation]]: In ZF, every derivation from a sentence theory uses finitely many assumptions. Weakening, concatenation and replacement of proved sentence premises by their proofs preserve derivability. The union of an inclusion-chain of consistent sentence theories in one fixed signature is consistent, including the empty chain.

## Proof

**Given:** Interpretation data and obligation proofs as defined, plus a finite S-derivation in the specified calculus.

1.1 Under the guard on free inputs, induction on terms proves that $V_t$ has a value in D, is unique modulo E, and is invariant under E-equivalent inputs. The variable case uses E reflexivity and transitivity on D. At a function node, the finitely many argument values exist by induction; graph totality supplies the output. Congruence of the graph identifies outputs modulo E when the arguments are replaced, and graph uniqueness compares any two outputs. No guard asserts E-reflexivity outside D. These are precisely the obligations in F1. [F1, given]

2.1 Induction on formulas proves invariance under E-equivalent assignments: atoms use step 1.1 and relation congruence; negation and conjunction use Boolean reasoning; an existential retains its witness while changing the other parameters. Simultaneous substitution induction gives, for free-for t and fresh z, $(\phi[t/x])^I\leftrightarrow\exists z(V_t(z)\land\phi^I[z/x])$ under the free-input guard. At atoms substitute the argument graphs. At conjunction compare the two possible values modulo E and use formula invariance to place both conjuncts at one value. At negation, value existence and invariance imply every value has the same truth value, so $\neg\exists z(V_t(z)\land A(z))\leftrightarrow\exists z(V_t(z)\land\neg A(z))$. At quantifiers rename the binder away from t,z and commute independent existential witnesses using F2. Thus the substitution equivalence holds in both directions, including when x is absent. [F2, step 1.1]

3.1 Surplus guards can be removed. If x is absent from A and G and T proves $(G\land D(x))\to A$, rearrange it to $D(x)\to(G\to A)$ and apply restricted existential elimination to obtain $(\exists xD(x))\to(G\to A)$. Domain nonemptiness from F1 yields $G\to A$. All temporary deductions can be discharged by F3: generalized or eliminated variables have been chosen absent from those open assumptions. [F1, F3, step 2.1]

4.1 The six logical schemes of F4 translate as follows. A Boolean tautology remains a tautology under formula substitution. For universal instantiation take a value of t by step 1.1; the relativized universal supplies the matrix there and step 2.1 yields the substituted conclusion. Distribution sends $\forall x(D(x)\to(A\to B))$ and A to $\forall x(D(x)\to B)$ since x is absent from A. Existential introduction takes the value furnished by step 2.1 as its domain witness. Reflexivity follows from a term value and E-reflexivity. For equality substitution, interpreted equality relates the values of the two terms by E; formula invariance transports the substituted matrix, and step 2.1 translates back. Add required guards, remove surplus ones by step 3.1, and use F2 for universal abbreviations and quantified double negation. Every auxiliary witness variable is fresh. [F2, F4, step 1.1, step 2.1, step 3.1]

5.1 Induct over source proof lines. Sentence axioms use their supplied translation proofs. For MP enlarge both guards to their union, apply propositional MP and remove surplus guards. For generalization in x, write the transformed premise as $G\to(D(x)\to A)$ with x absent from G, generalize and distribute to obtain $G\to\forall x(D(x)\to A)$; F2 identifies the expanded universal translation. For existential elimination with x absent from the source consequent B, rearrange the premise to $(D(x)\land A)\to(G\to B)$ with x absent from G,B, eliminate x and rearrange back. Step 3.1 then removes surplus guards. These are exactly the three rules in F4. [F2, F4, step 3.1, step 4.1]

6.1 The source contradiction is $\exists x\neg(x=x)$. Its translation is refuted in T by domain-guarded E-reflexivity and step 1.1. Hence its translated proof and that refutation give the fixed target contradiction by explosion F2. Finite support and concatenation F5 assemble the finitely many obligation and axiom proofs used by step 5.1; finite selection is provable in ZF by induction on their number. Effective certificate data makes every such substitution and assembly effective. Finally, if B verifies a total contradiction-code map r, a hypothetical source contradiction code maps to a target one; under Con(T) that is impossible. Quantifying over the source code inside B gives Con(S). The totality verification is a separate hypothesis. [F2, F5, step 1.1, step 5.1] ∎

