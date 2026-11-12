---
id: thm-author-e0b0bf18ed2b-singular-realization-input
kind: theorem
title: External singular realization comparison
status: published
domain: mathematics
deps:
  - math:def-singular-simplex-and-singular-chain-group-with-coefficients
  - math:def-standard-topological-simplex-and-its-affine-face-maps
  - math:def-simplicial-object-and-simplicial-commutative-ring
  - math:def-disjoint-union-topology
  - math:def-quotient-topology
  - math:thm-quotient-universal-property
  - math:def-higher-homotopy-group-by-based-cubes
  - math:def-adjunction-by-unit-counit-and-triangle-identities
dependency_roles:
  math:def-singular-simplex-and-singular-chain-group-with-coefficients: mathematical-premise
  math:def-standard-topological-simplex-and-its-affine-face-maps: mathematical-premise
  math:def-simplicial-object-and-simplicial-commutative-ring: mathematical-premise
  math:def-disjoint-union-topology: mathematical-premise
  math:def-quotient-topology: mathematical-premise
  math:thm-quotient-universal-property: mathematical-premise
  math:def-higher-homotopy-group-by-based-cubes: mathematical-premise
  math:def-adjunction-by-unit-counit-and-triangle-identities: mathematical-premise
external_input: true
provenance:
  statement: ai-altered
  proof: literature-derived
sources:
  references:
    - title: J. P. May, A Concise Course in Algebraic Topology
      url: https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf
      locator: "Chapter 16, §§1–4, printed pp. 123–127: singular operators in §1,
        quotient and evaluation and second theorem in §2, weak-equivalence
        sketch in §3, adjunction at the end of p. 126 and beginning of p. 127;
        standing space convention in Chapter 5 §2, p. 41."
      statement: Singular simplices with precomposition operators form a simplicial
        set; realization identifies faces and degeneracies; evaluation is a
        natural weak equivalence and is the counit of realization–singular
        adjunction.
      hypotheses: A simplicial set and a space under May's standing compactly
        generated convention. The arbitrary-topological-space formulations below
        are supplied by the Kerodon references; the pointed restriction is
        explained explicitly in External input.
      reading_limits: Read the indicated constructions, both §2 theorem statements,
        the §3 weak-equivalence sketch and the §4 adjunction formula, plus the
        standing convention on p. 41, in this repair. May sketches the
        weak-equivalence proof; its omitted foundations are imported. No full
        reconstruction or independent proof verification is claimed.
    - title: "Kerodon, Construction 1.2.2.2: The singular simplicial set"
      url: https://kerodon.net/tag/001R
      locator: Construction 1.2.2.2, both bullets and final functor sentence.
      statement: For any topological space, the singular simplicial set consists
        degreewise of continuous maps from topological simplices, with operators
        given by affine precomposition.
      hypotheses: An arbitrary topological space; nondecreasing maps between finite
        nonempty ordered sets.
      reading_limits: Read the complete construction and coordinate formula during
        this repair. The general theory of simplicial objects is supplied by the
        declared library definition, not reconstructed from Kerodon.
    - title: Kerodon, The geometric realization of a simplicial set
      url: https://kerodon.net/tag/001X
      locator: Definition 1.2.3.1; Proposition 1.2.3.4 and its proof; Corollary
        1.2.3.5; Remark 1.2.3.16.
      statement: Every simplicial set has a functorial realization in topological
        spaces, characterized by the natural realization–singular map bijection.
        It is a colimit of topological simplices and is left adjoint to the
        singular functor.
      hypotheses: A simplicial set and an arbitrary topological target space.
      reading_limits: Read the stated universal property, existence proof, adjunction
        corollary and explicit colimit remark during this repair. Preceding
        results on simplicial skeleta and colimits used in the existence proof
        remain imported. The concrete face–degeneracy quotient is also stated by
        May at the recorded locator.
    - title: "Kerodon, Corollary 3.6.4.2: The realization–singular counit"
      url: https://kerodon.net/tag/0143
      locator: Corollary 3.6.4.2, full statement and displayed proof.
      statement: For every topological space X, the counit from the realization of its
        singular simplicial set to X is a weak homotopy equivalence.
      hypotheses: An arbitrary topological space, with no connectivity, CW-type or
        well-pointedness assumption.
      reading_limits: Read the complete corollary and its short proof during this
        repair. Its use of the unit theorem and equivalence results for Kan
        complexes is imported; those proofs were not independently checked.
dependency_level: 0
---

## Statement
A based topological space is a pair $(X,x_0)$, and a based map is a continuous map preserving the chosen point; these form the category $\mathrm{Top}_*$. A pointed simplicial set is a functor $K:\Delta^{\mathrm{op}}\to\mathrm{Set}$ with distinguished elements $*_n\in K_n$ preserved by every structure map. Its morphisms are natural transformations preserving these elements; their category is $\mathrm{sSet}_*$. Here $\Delta$ has objects $[n]=\{0<\cdots<n\}$ and nondecreasing maps.

Write $\Delta^n_{\mathrm{top}}$ for the standard topological simplex. For a based space $X$, define $\operatorname{Sing}_nX$ to be the set of continuous maps $\sigma:\Delta^n_{\mathrm{top}}\to X$. For $\alpha:[m]\to[n]$, let $\alpha_*:\Delta^m_{\mathrm{top}}\to\Delta^n_{\mathrm{top}}$ have $j$th coordinate $\sum_{\alpha(i)=j}t_i$; the singular structure map sends $\sigma$ to $\sigma\circ\alpha_*$. Thus $d_i\sigma=\sigma\circ\delta_i$, where $\delta_i$ inserts a zero coordinate, and $s_i\sigma=\sigma\circ q_i$, where $q_i$ adds the adjacent coordinates $i,i+1$. The distinguished simplex in every degree is the constant map at $x_0$. A based map $f:X\to Y$ induces $\operatorname{Sing}f$ by postcomposition.

For a pointed simplicial set $K$, define $|K|$ as the quotient of the topological disjoint union $\coprod_{n\geq0}\coprod_{a\in K_n}\Delta^n_{\mathrm{top}}$ by the equivalence relation generated by $(K(\alpha)a,t)\sim(a,\alpha_*t)$, for all $\alpha:[m]\to[n]$, $a\in K_n$ and $t\in\Delta^m_{\mathrm{top}}$, with the quotient topology. Its basepoint is $[ *_0,(1)]$; all $[ *_n,t]$ represent this same point. A pointed simplicial map $u:K\to L$ induces $|u|[a,t]=[u_n(a),t]$.

For every based topological space $X$, evaluation $\epsilon_X:|\operatorname{Sing}X|\to X$, given by $\epsilon_X[\sigma,t]=\sigma(t)$, is a natural based weak homotopy equivalence. Here a weak homotopy equivalence means a continuous map inducing a bijection on path components and isomorphisms $\pi_r(Y,y)\to\pi_r(Z,f(y))$ for every source point $y$ and every $r\geq1$; homotopy groups use based cubes and homotopies fixed on their boundary. Realization is left adjoint to the singular complex in the pointed categories: naturally in $K$ and $X$, the correspondence $u\mapsto\epsilon_X\circ|u|$ is a bijection from $\mathrm{sSet}_*(K,\operatorname{Sing}X)$ to $\mathrm{Top}_*(|K|,X)$. Its inverse sends $g$ to the map $a\mapsto(t\mapsto g[a,t])$. The unit is $a\mapsto(t\mapsto[a,t])$ and the counit is evaluation, with the usual triangle identities. No connectivity or well-pointedness hypothesis is required.

## Statement references
[[math:def-singular-simplex-and-singular-chain-group-with-coefficients]]

[[math:def-standard-topological-simplex-and-its-affine-face-maps]]

[[math:def-simplicial-object-and-simplicial-commutative-ring]]

[[math:def-disjoint-union-topology]]

[[math:def-quotient-topology]]

[[math:thm-quotient-universal-property]]

[[math:def-higher-homotopy-group-by-based-cubes]]

[[math:def-adjunction-by-unit-counit-and-triangle-identities]]

## Source contract
**Given:** An arbitrary based topological space $X$ and a pointed simplicial set $K$, with the constructions in the Statement.

**Goal:** Supply the natural evaluation weak equivalence and pointed adjunction used for sequential prespectra, retaining their explicit formulas.

[F1] May, Chapter 16 §§1–4, supplies the singular operators, realization quotient, evaluation theorem and unpointed adjunction in his standing category of spaces. His weak-equivalence argument in §3 is a sketch.

[F2] Kerodon Construction 1.2.2.2 and §1.2.3, especially Corollary 1.2.3.5, supply the singular construction and unpointed adjunction for arbitrary topological spaces. Corollary 3.6.4.2 supplies the evaluation weak homotopy equivalence for every topological space.

## External input
Import the comparison theorem and unpointed adjunction from [F1] and [F2] at the recorded locators; the arbitrary-space scope uses [F2]. No local reconstruction of the weak-equivalence proof is claimed.

The displayed constructions make the specialization precise. Affine maps satisfy $(\alpha\beta)_*=\alpha_*\beta_*$, so precomposition satisfies the simplicial identities. The quotient relations identify all distinguished simplices with the distinguished vertex. Evaluation respects these relations since $(\sigma\circ\alpha_*)(t)=\sigma(\alpha_*t)$, and is continuous by the quotient universal property, being continuous on each simplex. The same relations make $|u|$ well-defined and continuous. Postcomposition shows that evaluation is natural.

The pointed adjunction is the restriction of the imported unpointed correspondence: $u$ preserves the distinguished simplex in every degree exactly when its evaluated realization sends $[ *_0,(1)]$ to $x_0$, because $[ *_n,t]=[ *_0,(1)]$ for every $n,t$. Conversely, a based $g$ gives constant simplices on all $*_n$ by the displayed inverse formula. Thus the two inverse maps restrict to based maps. The unit and counit preserve basepoints, and their triangle identities are the identities of the imported adjunction. Only this restriction and the formula checks are explained here; the substantial comparison is literature input.
