---
id: def-standard-costandard-filtered-and-tilting-objects-in-a-highest-weight-category
kind: definition
title: "Standard- and costandard-filtered objects and tilting objects"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 3
deps: [def-standard-and-costandard-objects-in-category-o,
       def-verma-flag-and-its-multiplicities,
       thm-bgg-reciprocity,
       prop-restricted-duality-is-an-exact-involution-on-category-o,
       thm-every-category-o-object-has-finite-length,
       cor-injectives-have-costandard-filtrations,
       thm-projectives-in-category-o-have-verma-flags,
       thm-parabolic-category-o-is-a-highest-weight-category,
       def-axiom-of-choice]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Volodymyr Mazorchuk, Lectures on Algebraic Categorification, QGM Master Class Series, European Mathematical Society 2012 (complete 77-page arXiv lecture-note set)"
      url: "https://arxiv.org/pdf/1011.0144"
      locator: "Sections 4.4-4.5 (printed pp. 20-21): standard and costandard filtrations, $\\mathcal F(\\Delta)$, $\\mathcal F(\\nabla)$, quasi-hereditary structure, BGG reciprocity and the definition of tilting modules by simultaneous filtrations; complete passage read."
    - title: "Jonathan Brundan, Tilting modules for Lie superalgebras, Comm. Algebra 32 (2004) 2251-2268 (complete arXiv article)"
      url: "https://arxiv.org/pdf/math/0209235"
      locator: "Sections 2-3 (printed pp. 2-5): standard and costandard objects, $\\Delta$-flags, $(M:\\Delta(E))=\\dim\\mathrm{Hom}(M,\\nabla(E))/d_E$ and summand-closure of $\\mathcal F(\\Delta)$; complete passage read."
---

## Definition

Assume the Axiom of Choice ([[def-axiom-of-choice]]) as inherited from the
category-$\mathcal O$ suppliers below. Fix a finite genuine parabolic central
summand: an integral block $\mathcal C$ of a parabolic category
$\mathcal O^{\mathfrak p}$ ([[thm-parabolic-category-o-is-a-highest-weight-category]])
that is a **finite highest-weight block** with the following data.

(1) A finite label set $\Lambda$ with a partial order $\preceq$ (in the
parabolic/finite-type-$A$ setting this is the tableau order on the labels of
the block, i.e. the dominance order on the relevant highest weights); for each
$A\in\Lambda$ a standard object $\Delta_A$ and a costandard object $\nabla_A$
of $\mathcal C$, with
$$\operatorname{Hom}_{\mathcal C}(\Delta_A,\nabla_B)=\begin{cases}\mathbb C,&A=B,\\ 0,&A\neq B,\end{cases}\qquad \operatorname{Ext}^j_{\mathcal C}(\Delta_A,\nabla_B)=0\ \ (j\ge 1).$$

(2) The block is basic with finite-dimensional homomorphism spaces, every
object has finite length, and for each $A$ the projective cover $P_A$ of the
simple head $L_A$ of $\Delta_A$, respectively the injective envelope
$I_A=\nabla_A$ of the simple socle $L_A$ of $\nabla_A$, has a finite
$\Delta$-flag, respectively a finite $\nabla$-flag, with multiplicities
$$(P_A:\Delta_B)=(\nabla_B:L_A)=[\Delta_B:L_A]$$
(BGG reciprocity).

A **finite standard flag** ($\Delta$-flag) of $N\in\mathcal C$ is a finite
chain $0=N_0\subseteq N_1\subseteq\cdots\subseteq N_n=N$ of subobjects with
$N_i/N_{i-1}\cong\Delta_{A_i}$ for all $i$; a **finite costandard flag**
($\nabla$-flag) is defined verbatim with $\nabla_{A_i}$. Write
$\mathcal F(\Delta)$, respectively $\mathcal F(\nabla)$, for the full
subcategory of objects of $\mathcal C$ admitting such a flag (the zero object
has the empty flag). For $N\in\mathcal F(\Delta)$ and $A\in\Lambda$ the
**multiplicity** $(N:\Delta_A)$ is the number of indices $i$ with $A_i=A$;
this number is independent of the chosen flag by step 2.2 below. A **tilting
object** is an object lying in $\mathcal F(\Delta)\cap\mathcal F(\nabla)$.

An indecomposable tilting object with $\Delta$-flag having $\Delta_A$ exactly
once, as its lowest factor, and all remaining factors $\Delta_B$ with
$B\prec A$, is **normalized at** $A$ and written $T_A$; existence is supplied
by the classification theorem proved later in this pair, and by step 2.1 any
such object is the unique indecomposable tilting object with $A$ as its unique
maximal support label, by step 2.1. In a lower ideal $\Gamma\subseteq\Lambda$ (i.e.
$B\preceq A\in\Gamma$ implies $B\in\Gamma$) containing $A$, the object $T_A$
is a summand of the tilting generator of the Serre subcategory determined by
$\Gamma$ and is unchanged by the passage to $\Gamma$ (step 3.1).

## Facts & Assumptions

**Given:** A finite highest-weight block $\mathcal C$ with labels $(\Lambda,\preceq)$, standards $\Delta_A$, costandards $\nabla_A$, simples $L_A$, projective covers $P_A$ and finite length objects, as in Definition (1)-(2); write $\mathcal F(\Delta)$, $\mathcal F(\nabla)$ for its standard-, resp. costandard-filtered objects.

[F1] Highest-weight structure ([[thm-parabolic-category-o-is-a-highest-weight-category]]): within the fixed integral block the generalized standards $\Delta_A$ have simple heads $L_A$ and finite length with $[\Delta_A:L_B]\neq0\Rightarrow B\preceq A$; projectives have finite $\Delta$-flags; BGG reciprocity $[P_A:\Delta_B]=[\Delta_B:L_A]$ holds; restricted duality restricts to an exact contravariant involution of the block with $D\Delta_A=\nabla_A$ and $DL_A\cong L_A$.

[F2] Ordinary category $\mathcal O$ supplies the same formalism and its proofs ([[def-standard-and-costandard-objects-in-category-o]], [[def-verma-flag-and-its-multiplicities]], [[thm-bgg-reciprocity]], [[thm-projectives-in-category-o-have-verma-flags]], [[cor-injectives-have-costandard-filtrations]], [[thm-every-category-o-object-has-finite-length]]): finite flags, independent multiplicities $(N:\Delta_A)=\dim\operatorname{Hom}(N,\nabla_A)$ on filtered objects, BGG reciprocity, and finite length of every object.

[F3] Restricted Chevalley duality $D$ is an exact contravariant equivalence of $\mathcal O$ with $D^2\cong\operatorname{id}$ preserving weight multiplicities ([[prop-restricted-duality-is-an-exact-involution-on-category-o]]); it sends projectives to injectives and standard objects to costandard objects.

[F4] Basic finite-dimensional blocks over $\mathbb C$: the block algebra $A$ is basic, finite dimensional, and for a $\preceq$-maximal label $e$ the identity $[P_e:\Delta_x]=[\Delta_x:L_e]$ of [F1] and $[\Delta_x:L_e]\neq0\Rightarrow x=e$ give $P_e=\Delta_e$; then $AeA=Ae$, and $eAe=\operatorname{End}_A(P_e)$ is a division algebra over $\mathbb C$, hence $eAe=\mathbb C$.

[F5] Axiom of Choice ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

1.1 The categories $\mathcal F(\Delta)$ and $\mathcal F(\nabla)$ contain $0$ and all $\Delta_A$, resp. all $\nabla_A$, and are closed under finite direct sums: concatenating flags of $X$ and $Y$ exhibits a flag of $X\oplus Y$. [F2, algebra]

1.2 Both $\mathcal F(\Delta)$ and $\mathcal F(\nabla)$ are closed under extensions. Let $0\to X\to N\to Z\to 0$ be short exact with $X,Z\in\mathcal F(\Delta)$; we prove $N\in\mathcal F(\Delta)$ by induction on the length $n$ of a $\Delta$-flag of $Z$. For $n=0$, $Z=0$ and $N\cong X$. For $n\ge 1$ choose a subobject $Z'\subseteq Z$ with $Z/Z'\cong\Delta_A$ and pull the extension back along $Z'\hookrightarrow Z$ to obtain $0\to X\to N'\to Z'\to 0$; by induction $N'\in\mathcal F(\Delta)$, and $0\to N'\to N\to\Delta_A\to 0$ exhibits a $\Delta$-flag of $N$. The costandard case follows from the standard case by applying the exact contravariant equivalence $D$ of [F3], which satisfies $D\Delta_A=\nabla_A$ by [F1]. [F1, F2, F3]

1.3 **The heredity data at a maximal label.** Let $e\in\Lambda$ be $\preceq$-maximal. By [F4], $P_e=\Delta_e$, $AeA=Ae$ and $eAe=\mathbb C$. Put $\bar A:=A/AeA=A/Ae$; its modules are exactly the $A$-modules killed by $e$, and these form the highest-weight block $\mathcal C_0$ with label set $\Lambda\setminus\{e\}$, standards $\Delta_x$ and costandards $\nabla_x$ for $x\ne e$: indeed $[\Delta_x:L_e]=0$ for $x\ne e$ by [F1], so those standards and costandards are killed by $e$, and the Hom/Ext and BGG axioms pass to the quotient by [F1]. [F1, F4]

1.4 **Higher $\operatorname{Ext}$-vanishing and the forward criterion.** If $N\in\mathcal F(\Delta)$ then $\operatorname{Ext}^j(N,\nabla_B)=0$ for every $j\ge1$ and every $B$; if $M\in\mathcal F(\nabla)$ then $\operatorname{Ext}^j(\Delta_B,M)=0$ for every $j\ge1$ and every $B$. Indeed, filter $N$ with successive quotients $\Delta_{A_i}$; the long exact sequence in the second variable and $\operatorname{Ext}^j(\Delta_{A_i},\nabla_B)=0$ for $j\ge1$ give the first claim by induction on the flag length, and the second follows by duality [F3]. In particular $\operatorname{Ext}^1(N,\nabla_B)=0$ for all $B$ whenever $N\in\mathcal F(\Delta)$, and $\operatorname{Ext}^1(\Delta_B,M)=0$ whenever $M\in\mathcal F(\nabla)$. [F1, F3, algebra]

1.5 **Duality exchanges the two flag categories.** Since $D$ is an exact contravariant equivalence with $D\Delta_A=\nabla_A$ and $D\nabla_A\cong\Delta_A$ ([F1], [F3]), applying $D$ to a $\Delta$-flag of $N$ gives a $\nabla$-flag of $DN$ and conversely; hence $D\mathcal F(\Delta)=\mathcal F(\nabla)$, and $D$ restricts to an involutive anti-equivalence of the tilting objects. [F1, F3]

2.1 **Uniqueness of a tilting object with lowest flag factor $\Delta_A$.** Suppose $X$ and $X'$ are indecomposable tilting objects whose $\Delta$-flags have $\Delta_A$ once, as lowest factor, and all other factors with labels $\prec A$. Choose the normalized inclusions $i:\Delta_A\hookrightarrow X$ and $i':\Delta_A\hookrightarrow X'$ onto the lowest factors of the flags. The quotient $X/\Delta_A$ is $\Delta$-filtered with labels $\prec A$ and $X'$ is $\nabla$-filtered, so $\operatorname{Ext}^1(X/\Delta_A,X')=0$ by a dimension-shift along the $\Delta$-flag of $X/\Delta_A$ and $\operatorname{Ext}^1(\Delta_B,X')=0$, the latter from step 1.4 applied to the $\nabla$-filtered object $X'$. Hence $i'$ extends to $f:X\to X'$ with $fi=i'$. Symmetrically $i$ extends to $g:X'\to X$ with $gi'=i$. Then $gf$ restricts to the identity of $\Delta_A$ inside $X$, so $(gf)^n\neq0$ for all $n$. As $X$ is indecomposable with $\operatorname{End}(X)$ finite dimensional, Fitting's lemma makes $\operatorname{End}(X)$ local, and in a finite-dimensional local algebra every non-nilpotent element is invertible; so $gf$ is an isomorphism. Symmetrically $fg$ is an isomorphism, and then $f$ is an isomorphism. Hence an indecomposable tilting object with lowest flag factor $\Delta_A$ and all other labels $\prec A$ is unique up to isomorphism, and its unique maximal support label is $A$. [F1, step 1.4, algebra]

2.2 **Multiplicities are independent and computed by $\operatorname{Hom}$.** For $N\in\mathcal F(\Delta)$ with flag factors $\Delta_{A_1},\dots,\Delta_{A_n}$ and every $B$, induction on $n$ using the long exact $\operatorname{Hom}$-sequence and step 1.4 gives $\dim\operatorname{Hom}(N,\nabla_B)=\sum_{i=1}^n\dim\operatorname{Hom}(\Delta_{A_i},\nabla_B)=\#\{i:A_i=B\}=(N:\Delta_B).$ Hence $(N:\Delta_B)$ depends only on $N$ and $B$, not on the flag. Dually $(N:\nabla_B)=\dim\operatorname{Hom}(\Delta_B,N)$ for $N\in\mathcal F(\nabla)$. [F1, F2, step 1.4]

2.3 **Tor-vanishing and the converse criterion.** Let $N\in\mathcal C$ satisfy $\operatorname{Ext}^1(N,\nabla_A)=0$ for all $A\in\Lambda$; we show $N\in\mathcal F(\Delta)$. First all higher groups vanish: let $0\to N\to J^0\to J^1\to\cdots$ be an injective coresolution of $N$ with each $J^i$ a finite direct sum of injective envelopes (whose existence in the block is inherited with [F2], using the Axiom of Choice [F5]). Each $J^i$ has a finite $\nabla$-flag by [F2] applied via [F1], and the long exact sequence for $0\to\nabla_C\to J\to J/\nabla_C\to0$ together with induction on $j$ shows $\operatorname{Ext}^j(N,\nabla_A)=0$ for all $j\ge1$, $A\in\Lambda$. Take a finite projective resolution $P_\bullet\to N$ and let $I$ be any injective object of the block $\mathcal C_0$ of step 1.3. Then $I$ is $\nabla$-filtered with labels $\Lambda\setminus\{e\}$, so $\operatorname{Ext}^j(N,I)=0$ for all $j\ge1$. Since $I$ is a module over $\bar A$, the adjunction $\operatorname{Hom}_{\bar A}(\bar A\otimes_A P_i,I)\cong\operatorname{Hom}_A(P_i,I)$ identifies the two complexes, and exactness of $\operatorname{Hom}_{\bar A}(-,I)$ shows $H^j(\operatorname{Hom}_{\bar A}(\bar A\otimes_A P_\bullet,I))=0$ for $j\ge1$. If some $H_j(\bar A\otimes_A P_\bullet)\neq0$ with $j\ge1$, pick a nonzero homomorphism from it into some injective $\bar A$-module $I$ and an element on which it is nonzero: under the identification $H^j(\operatorname{Hom}_{\bar A}(\bar A\otimes_A P_\bullet,I))=\operatorname{Hom}_{\bar A}(H_j(\bar A\otimes_A P_\bullet),I)$ the corresponding class is nonzero, contradicting the vanishing just proved. Hence $\operatorname{Tor}^A_j(\bar A,N)=0$ for all $j\ge1$, and applying $-\otimes_A N$ to $0\to AeA\to A\to\bar A\to0$ gives the exact sequence $0\to Ae\otimes_{eAe}eN\to N\to\bar A\otimes_A N\to0 .$ Put $E:=\bar A\otimes_A N$. For every $x\ne e$ and $j\ge1$ the identification above gives $\operatorname{Ext}^j_{\bar A}(E,\nabla_x)\cong\operatorname{Ext}^j_A(N,\nabla_x)=0$, in particular $\operatorname{Ext}^1_{\bar A}(E,\nabla_x)=0$ for all labels of $\mathcal C_0$. By induction on $|\Lambda|$ (the case $|\Lambda|=1$ is the present argument with $\bar A=0$) applied to the smaller highest-weight block $\mathcal C_0$, $E\in\mathcal F(\Delta)$. The kernel $Ae\otimes_{eAe}eN\cong\Delta_e^{\oplus\dim eN}$ is a finite sum of copies of $\Delta_e$ by step 1.3, so $N$ is an extension of two $\Delta$-filtered objects and hence $\Delta$-filtered by step 1.2. This proves $\mathcal F(\Delta)=\{N\in\mathcal C:\operatorname{Ext}^1(N,\nabla_A)=0\ \forall A\}$. Applying the exact anti-equivalence $D$ of step 1.5 gives the dual statement $\mathcal F(\nabla)=\{N:\operatorname{Ext}^1(\Delta_A,N)=0\ \forall A\}$. [F1, F2, F5, step 1.2, step 1.3, step 1.4, induction]

3.1 **Invariance under lower ideals.** Let $\Gamma\subseteq\Lambda$ be a lower ideal containing $A$, and let $\mathcal C_\Gamma$ be the Serre subcategory of objects all of whose composition factors have labels in $\Gamma$. Every factor $\Delta_B$ of the $\Delta$-flag of a tilting object normalized at $A$ has $B\preceq A$, hence $B\in\Gamma$ by the lower-ideal property; so the object and its flag lie in $\mathcal C_\Gamma$, and the same object, with the same normalization and the same flag, is a tilting object normalized at $A$ when computed inside $\Gamma$. Existence of the normalized indecomposable tilting object $T_A$ is proved in the classification theorem of this pair. [F1, step 2.1]

4.1 **Closure under summands.** If $N=N_1\oplus N_2\in\mathcal F(\Delta)$, then $\operatorname{Ext}^1(N_1,\nabla_A)$ is a direct summand of $\operatorname{Ext}^1(N,\nabla_A)=0$, the latter by step 1.4, for every $A$; so $N_1\in\mathcal F(\Delta)$ by step 2.3. The same holds for $N_2$, and dually for $\mathcal F(\nabla)$. [step 1.4, step 2.3] ∎
