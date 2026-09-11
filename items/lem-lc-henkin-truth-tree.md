---
id: "lem-lc-henkin-truth-tree"
kind: "lemma"
title: "Henkin truth trees for infinitary compactness"
deps: ["def-lc-infinitary-syntax-and-compactness", "lem-lc-inaccessible-size-and-rank-bounds", "def-kappa-tree-and-tree-property", "def-axiom-of-choice"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Monk Theorem 17.24 pp.359–361 (correct the printed truth-assignment condition
        (4))
      url: https://euclid.colorado.edu/~monkd/jech.pdf
provenance:
  statement: ai-altered
  proof: ai-generated
status: published
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

In ZFC let kappa be inaccessible and T a less-than-kappa satisfiable $L_{\kappa,\kappa}$ theory with $|T|\leq\kappa$. There is a kappa-tree of satisfiable partial truth assignments in an expanded fragment of size kappa such that every cofinal branch yields a model of T. Only the symbols occurring in T are needed; unused symbols of a larger ambient signature may subsequently be interpreted arbitrarily.

## Facts & Assumptions

**Given:** ZFC. Built the signature and full Henkin expansion in kappa stages, proved its set-size bounds and expansion property, then constructed realized truth levels and derived the quotient model by a complete infinitary truth induction.

[F1] [[def-lc-infinitary-syntax-and-compactness]]: Well-founded set syntax has set-structure satisfaction and the stated infinitary Boolean and tuple clauses.

[F2] [[lem-lc-inaccessible-size-and-rank-bounds]]: Strong limit bounds truth levels; regularity and exponent bounds control the expanded fragment.

[F3] [[def-kappa-tree-and-tree-property]]: The required tree must have all kappa levels and small width.

[F4] [[def-axiom-of-choice]]: AC well-orders syntax and carriers, supplies witnesses in expansions and representatives in the eventual quotient.

## Proof

1.1 For each nu<kappa every map nu to kappa has bounded range by regularity. For each bound eta<kappa, F2 gives fewer than kappa such maps into eta. Union over kappa bounds has size at most kappa, using the cardinal-square estimate in F2; constant maps give equality for nu>0. Thus $\kappa^{<\kappa}=\kappa$. Every syntax tree has fewer than kappa nodes: its nodes lie at finite path depths, each depth has fewer than kappa nodes by regularity and its branching bounds, and a countable union is still small. A formula therefore uses fewer than kappa symbols. The symbols of T number at most kappa. In any signature with at most kappa symbols and kappa variables, canonical labeled syntax trees are coded by fewer than kappa pairs of finite paths and labels, so their number is at most $\kappa^{<\kappa}=\kappa$. Restrict now to the symbols of T. [F1, F2, F4]

2.1 Add kappa fresh constants, including a designated default constant. In kappa stages perform the following operation: for every existential sentence $\exists\bar x\,\psi(\bar x)$ in the language so far, add a fresh tuple of constants $\bar c_\psi$ of the same length and the Henkin axiom $(\exists\bar x\,\psi(\bar x))\mathbin{\to}\psi(\bar c_\psi)$. At limits take unions. Step 1.1 bounds the number of formulas and new constants at every stage by kappa, so the final signature and set H of these axioms have size kappa. Every sentence of the final language, including every substitution instance with constants, uses fewer than kappa constants, hence belongs to some stage by regularity; its existential witness axiom is supplied at the next stage. Given any original set structure, choose a default element and well-order the set of all its tuples of length less than kappa using F4. At each stage interpret each fresh witness tuple as the least tuple satisfying its matrix if one exists, and as the constant default tuple otherwise. Later stages preserve earlier interpretations. This constructs an expansion satisfying all H, with the original structure unchanged. [F1, F4, step 1.1]

3.1 Let F be all sentences of the final language, including H and T, and enumerate F without repetition in type kappa; the added constants ensure size kappa. Write F_alpha for the first alpha sentences. At level alpha put the pairs (alpha,v), where $v:F_\alpha\to2$ is the actual truth restriction of some expanded set structure satisfying H and $T\cap F_\alpha$. Such truth restrictions form a set by Separation in $2^{F_\alpha}$, using set satisfaction from F1; no selection from a proper class of models is made. The level is nonempty: T intersect F_alpha has size below kappa, so has a model, which step 2.1 expands. There are at most $2^{|\alpha|}<\kappa$ nodes. Order nodes by proper restriction with their levels. Restricting a realizing model's truth gives a node at every earlier level, so the resulting tree has height kappa and the F3 width bound. [F1, F2, F3, step 2.1]

4.1 A cofinal branch has union $v:F\to2$. Every fewer-than-kappa collection of sentences is contained in some F_alpha by regularity. Therefore its assigned truth values are simultaneously realized in a set structure: take a branch node above alpha and its realizing structure. In particular v makes every sentence of T and H true, obeys negation, and obeys every fewer-than-kappa conjunction or disjunction together with all of its components. Equality of constants is an equivalence relation, and replacement of equal constants in any fixed infinitary sentence preserves its v-value: all the fewer-than-kappa equality instances, the sentence and its replacement fit together in one realized restriction. [F1, step 3.1]

5.1 Form a structure N whose carrier is the set of equivalence classes of constants under v-equality. It is nonempty. For each finite-arity function symbol and constant tuple, the logically true sentence $\exists x\,(x=f(\bar c))$ has v-value one by step 4.1; its Henkin axiom supplies a constant naming the function value. Use that class as the function interpretation. Equality substitution in step 4.1 proves both independence of the selected value constant and of the argument representatives. Interpret a relation by the v-value of its constant instance; this is independent of representatives for the same reason. Original constants have their own classes. Induction on finite terms now gives a named value for every term and agreement of all atomic formulas with v. [F1, F4, step 2.1, step 4.1]

6.1 Induct on formula syntax to show N satisfies a sentence with constant parameters exactly when its v-value is one. Atoms follow step 5.1; infinitary Boolean clauses follow step 4.1. If an existential block has v-value one, its Henkin axiom and the Boolean clauses give a witness tuple of constants with matrix value one, hence a witness in N by induction. Conversely a witness tuple in N has fewer than kappa classes; F4 chooses constant representatives. Induction makes that matrix instance have v-value one. The matrix instance together with the existential sentence is realized in one restriction from step 4.1, so the existential has v-value one too. Empty blocks have the unique empty tuple. This completes the truth induction, and all T holds in N. Any unused symbols from the original larger signature can be interpreted on this nonempty carrier by default-valued functions and empty relations. [F1, F4, step 2.1, step 4.1, step 5.1] ∎
