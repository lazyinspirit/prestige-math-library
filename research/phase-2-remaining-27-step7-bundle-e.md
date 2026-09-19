# Step-7 evidence bundle — group e (run `phase-2-remaining-27`)
Every block below is verbatim: each item's own claim section, its Facts section, and the
recorded quote of every cited fact. Nothing here is a summary, so the bundle is evidence
for exactly what it quotes and no more. Open `items/<id>.md` when you need any other part,
when a cap marker names a file, or when the contract records no quote.
The bundle is an entry point, never a fence. You keep full access to: web search
(`tools.web_search=true`, with shell network access) for any source check; the entire
published library under `library/`; and every item of this frontier under `items/`,
including items owned by other groups (needed for seams and cross-group alerts).
Read each file once, in the order given, and do not re-read one already in your context —
but read whatever else the mathematics requires.
## Rejection queue (grouped by item)
### `thm-shelah-inner-model-satisfies-zf-and-dependent-choice` — 1 rejection(s)
- `gpt-5.6-terra` (context `6c668080fcadd9eb`): F4 inaccurately restates its dependency: the supplied DC definition is the starting-point-free global form; the prescribed-start form is explicitly separate and requires an equivalence proof.

### `thm-shelah-sweet-amalgamation-preserves-sweetness` — 1 rejection(s)
- `gpt-5.6-terra` (context `9807a4d8fcf88a6f`): F2 is inaccurately restated: its interface only makes a sweet forcing itself sigma-directed, not every complete suborder of one. P0 is merely embedded in BA(Q1), which is not supplied as sweet; thus the directed cover A_j used throughout is unsupported.

### `thm-shelah-sweet-partial-isomorphism-extension` — 1 rejection(s)
- `gpt-5.6-terra` (context `a82fa741d982cc36`): Step 3.1 wrongly treats an increasing union of complete Boolean algebras as complete. F2 only gives a sweet union forcing and complete stage embeddings; arbitrary subsets need not lie in one stage, so their joins may be absent from the union. Thus 4.1 and the claimed complete B* 

### `thm-shelah-universal-meagre-composition-preserves-sweetness` — 1 rejection(s)
- `gpt-5.6-terra` (context `9eeab02fe2ae7d2e`): F3 is misrestated: its supplied interface concerns a complete suborder and a dense family (A_j), not arbitrary old E-classes A_m or the trace-modulus asserted in 2.1. Thus 2.1, and all later uses of κ_m, lack a licensed inference.

### `thm-singular-value-decomposition-for-compact-operators` — 1 rejection(s)
- `gpt-5.6-terra` (context `a3524f533a36cfda`): Ill-typed rank definition: the supplied dimension interface defines dim only for finite-dimensional spaces and expressly forbids dim V=∞. Thus r:=dim ran T∈N∪{∞} is undefined for infinite-rank compact T, so the statement does not cover its claimed case.

### `thm-spectral-theorem-for-compact-self-adjoint-operators` — 1 rejection(s)
- `gpt-5.6-terra` (context `157d91c860cdc021`): Claim 1 is false: for compact self-adjoint T on ℓ² with Te_n=(n+1)^{-1}e_n, Σ is infinite, while the neighbourhood B(1,2) of nonzero 1 contains all of Σ. Only existence of a small finite-intersection neighbourhood is valid.

### `thm-strongly-compact-relative-consistency-normal-moore` — 1 rejection(s)
- `gpt-5.6-terra` (context `3cf65c4789628c51`): F3 inaccurately restates its dependency: that interface requires a supplied arithmetic-base verification of a code map r for the particular T,U; it does not license the blanket rule “if T proves φ then Con(T) implies Con(T+φ)”. No such verification is supplied.

### `thm-trace-class-iff-product-of-two-hilbert-schmidt-operators` — 1 rejection(s)
- `gpt-5.6-terra` (context `f08023c26bf77de4`): Step 1.2 needs existence/properties of the positive square root |T|^{1/2} (self-adjoint, B²=|T|, eigenvalue action). A2/SVD do not supply these, and the positive-square-root lemma is not a dependency; the supplied A/B interface cannot be used as one.

### `thm-trace-class-is-a-two-sided-banach-operator-ideal` — 1 rejection(s)
- `gpt-5.6-terra` (context `475fd360fb8cd499`): A1 drops the compactness hypothesis of the cited nuclear-series lemma. Steps 1.2 and 1.4 infer trace class merely from a nuclear representation, without establishing that its operator-norm limit is compact; the supplied lemma only applies after compactness is known.

### `thm-trace-is-absolutely-convergent-and-basis-independent` — 1 rejection(s)
- `gpt-5.6-terra` (context `4f8ec60f08727a7a`): Step 1.2 is not typed for real Hilbert spaces: Q(i)-linear combinations of real-space vectors are undefined. Thus its dense-set and countable-basis construction, needed to compare representations, does not cover the stated real case.

## Item evidence
### [[thm-shelah-inner-model-satisfies-zf-and-dependent-choice]]

$N=HOD(S)$ is a transitive inner model with the same ordinals and reals as the
ambient Shelah extension, satisfies every axiom of ZF, and satisfies the
serial-relation form of Dependent Choice.

**Facts & Assumptions (verbatim).**

**Given:** The class $N$ of the definition item in the ambient Shelah extension.

[F1] [[def-shelah-hereditarily-ordinal-sequence-definable-model]]: membership in $N$ is hereditary unique definability in a rank from one countable ordinal sequence and finitely many ordinals; the class is first-order and contains all reals and all ordinals; finite tuples of $S$-parameters interleave.

[F2] [[lem-shelah-inner-model-is-closed-under-ambient-omega-sequences]]: every ambient $\omega$-sequence with values in $N$ belongs to $N$.

[F3] [[thm-solovay-inner-model-satisfies-zf-and-real-ordinal-definability]] and [[thm-solovay-inner-model-satisfies-dependent-choice]]: the corresponding ZF and DC clauses are already proved for the Solovay $HOD(S)$ model at exactly this interface.

[F4] [[def-serial-relation-dependent-choice-principle-over-zf]]: DC says that for a nonempty set $A$, a serial relation $R$ on $A$ and $a_0\in A$, there is a sequence $\langle a_n:n<\omega\rangle$ with $a_0$ given and $R(a_n,a_{n+1})$ for all $n$.

[F5] [[def-axiom-of-choice]]: ambient AC, used only to produce the ambient recursive chain below.

**Cited clauses (verbatim quotes from the proof contract).**

- `F1` → [[def-shelah-hereditarily-ordinal-sequence-definable-model]] (Definition)
  > Let $S=\bigcup_{\alpha\in\mathrm{Ord}}{}^{\omega}\alpha$ be the class of all countable sequences of ordinals, exactly as in the Solovay $HOD(S)$ presentation [[def-solovay-hereditarily-ordinal-sequence-definable-model]], and define $$N=HOD(S)=\{x:\operatorname{tc}(\{x\})\subseteq OD(S)\},$$ where $OD(S)$ is the class of sets uniquely definable in a rank from one $s\in S$, finitely many ordinals and a formula, in the sense of [[def-ordinal-definability-and-hod]].
- `F2` → [[lem-shelah-inner-model-is-closed-under-ambient-omega-sequences]] (Statement)
  > If $f$ belongs to the ambient ZFC forcing extension and maps $\omega$ into $N=HOD(S)$, then $f$ itself belongs to $N$.
- `F3` → [[thm-solovay-inner-model-satisfies-zf-and-real-ordinal-definability]] (Statement)
  > $M=HOD(S)$ is a transitive ZF inner model with the same ordinals and reals as $V[G]$.
- `F3` → [[thm-solovay-inner-model-satisfies-dependent-choice]] (Statement)
  > $M$ satisfies the serial-relation Dependent Choice principle, although it need not satisfy full Choice.
- `F4` → [[def-serial-relation-dependent-choice-principle-over-zf]] (Definition)
  > **Dependent Choice (DC)** is the following global principle: for every **nonempty** set $A$ and every serial relation $R$ on $A$, there is a function $f:\omega\to A$ such that $f(n)\,R\,f(n+1)$ for every $n\in\omega$.
- `F5` → [[def-axiom-of-choice]] (Definition)
  > The **Axiom of Choice** (AC) is the following statement.

### [[thm-shelah-sweet-amalgamation-preserves-sweetness]]

Let $Q_1$ and $Q_2$ be sweet forcings and let $P_0$ be completely embedded in
$BA(Q_1)$ and in $BA(Q_2)$. Their Boolean amalgam $Q_1*_{P_0}Q_2$ is sweet and
contains complete canonical copies of $Q_1$ and $Q_2$. If the sweetness model
on $Q_2$ extends a fixed model on $Q_1$ in the sense of the extension clauses,
the amalgam can be equipped with a sweetness model extending that fixed model.
The formulation also permits two named complete embeddings of $P_0$, by
identifying their images before taking the amalgam.

**Facts & Assumptions (verbatim).**

**Given:** Sweetness models $(Q_\ell,D_\ell,(E^\ell_n)_{n<\omega})$, $\ell=1,2$, and a forcng preorder $P_0$ completely embedded in $BA(Q_1)$ and in $BA(Q_2)$, with the two images of $P_0$ identified. A pair $(q_1,q_2)\in Q_1\times Q_2$ is **admitted** when some $p_0\in P_0$ satisfies $p_0\Vdash q_1\in Q_1/P_0$ and $p_0\Vdash q_2\in Q_2/P_0$; $O=Q_1*_{P_0}Q_2$ is the set of admitted pairs, ordered coordinatewise.

[F1] [[def-shelah-sweetness-model]]: both $(Q_\ell,D_\ell,(E^\ell_n))$ satisfy the sequential and transfer clauses with downward directed classes, and the extension relation between sweetness models is the five-clause relation of the Definition.

[F2] [[lem-shelah-sweet-forcings-are-sigma-directed-ccc]]: a complete suborder of a sweet forcing is a countable union of directed, hence pairwise compatible, subsets; applied to $P_0$ inside $BA(Q_1)$ this gives sets $A_j\subseteq P_0$ with directed union $P_0$.

[F3] [[lem-shelah-sweet-density-transfer-along-complete-suborders]]: the two-part uniform conclusion of the corresponding source claim, in the form that for a condition $q\in D_\ell$ and $p_0\Vdash q\in Q_\ell/P_0$ there are $j$ and $k$ such that every $q'\mathrel{E^\ell_k}q$ has some $p_0'\in A_j$ with $p_0'\le p_0$ and $p_0'\Vdash q'\in Q_\ell/P_0$, and the family of such $A_j$ is dense below $p_0$.

**Cited clauses (verbatim quotes from the proof contract).**

- `F1` → [[def-shelah-sweetness-model]] (Definition)
  > The library order convention is used throughout: a forcing preorder $P$ carries a
  > reflexive transitive relation in which $q\le p$ means that $q$ is stronger than
  > $p$ ([[def-forcing-preorder-compatibility-and-filter]]).
  > 
  > A **Shelah sweetness model** is a triple $(P,D,(E_n)_{n<\omega})$ such that
  > 
  > - $P$ is a forcing preorder and $D\subseteq P$ is dense;
  > - each $E_n$ is an equivalence relation on $D$ with countably many classes, and
  >   $E_{n+1}$ **refines** $E_n$, that is, $p\mathrel{E_{n+1}}p'$ implies
  >   $p\mathrel{E_n}p'$;
  > - every $E_n$-class is **downward directed**: any two members of the class have a
  >   common lower bound that also belongs to the class;
  > 
  > and the two clauses below hold.
  > 
  > **Sequential clause.** If $p_i\in D$ for every $i\le\omega$ and
  > $p_i\mathrel{E_i}p_\omega$ for every $i<\omega$, then $\{p_i:i\le\omega\}$ has a
  > common lower bound; moreover for every $n<\omega$ the tail
  > $\{p_i:n\le i\le\omega\}$ has a common lower bound that lies in the $E_n$-class
  > of $p_\omega$.
  > 
  > **Transfer clause.** For all $p,q\in D$ and every $n<\omega$ there is
  > $k<\omega$ such that for every $p'\mathrel{E_k}p$: if some $r\mathrel{E_n}q$
  > satisfies $r\le p$, then some $r'\mathrel{E_n}q$ satisfies $r'\le p'$.
  > 
  > **Comparable form.** The transfer clause is equivalent to the following
  > statement, which is the form used below whenever a condition has to be
  > synchronized with a comparable one. If $q\le p$ in $D$ and $n<\omega$, then for
  > some $k<\omega$ every $p'\mathrel{E_k}p$ has a common strengthening inside the
  > $E_n$-class of $q$: there is $q'\mathrel{E_n}q$ with $q'\le q$ and $q'\le p'$.
  > For the forward implication apply the transfer clause to $p,q,n$, using $r=q$
  > as the required witness that some member of the $E_n$-class of $q$ lies below
  > $p$; it yields $r'\mathrel{E_n}q$ with $r'\le p'$, and downward directedness of
  > the class applied to the pair $q,r'$ supplies $q'\mathrel{E_n}q$ with
  > $q'\le q,r'$. For the converse reading, suppose the hypothesis of the transfer
  > clause holds for a triple $p,q,n$ and a witness $r\mathrel{E_n}q$ with $r\le p$;
  > applying the comparable form to the pair $r\le p$ and to $n$ gives a single $k$
  > such that every $p'\mathrel{E_k}p$ has a common strengthening with $r$ inside
  > the class of $r$, which is also the class of $q$, and this $k$ serves the
  > transfer clause, because $E_n$-equivalent conditions determine the same
  > $E_n$-class.
  > 
  > **Extension of sweetness models.** A sweetness model
  > $M_2=(P_2,D_2,(E^2_n))$ **extends** $M_1=(P_1,D_1,(E^1_n))$ when
  > 
  > - $P_1$ is a complete suborder of $P_2$, that is, $P_1\subseteq P_2$, the order
  >   and incompatibility relations on $P_1$ are the restrictions of those on
  >   $P_2$, and every maximal antichain of $P_1$ is maximal in $P_2$. This is not
  >   a density requirement: an arbitrary condition of $P_2$ need not have a
  >   stronger condition in $P_1$;
  > - $D_1\subseteq D_2$;
  > - each old $E^1_n$ is the restriction of $E^2_n$ to $D_1$;
  > - for every $p\in D_1$ and every $n<\omega$, its $E^2_n$-class is contained in
  >   $P_1$;
  > - whenever $p\in D_2$, $q\in P_1$ and $q\le p$, then $p\in D_1$.
  > 
  > Thus in particular $D_2\cap P_1=D_1$, and the preceding class-containment
  > clause may equivalently say that every $E^2_n$-class meeting $D_1$ is contained
  > in $D_1$. Standard iteration-stage inclusions are complete suborders in this
  > sense.
  > 
  > **Boolean-algebra language.** By
  > [[thm-forcing-equivalence-and-boolean-completion]] the separative quotient and
  > the regular-open completion of $P$ ([[def-complete-boolean-algebra-and-regular-open-sets]])
  > are forcing-equivalent to $P$, with generic filters corresponding by inverse
  > image. A sweetness model on $P$ therefore induces one on the nonzero elements
  > $B\setminus\{0_B\}$ of the completion, with the same dense set and the same
  > equivalence relations restricted to it, because a subset of $B\setminus\{0_B\}$
  > with a common lower bound in $B$ has a common lower bound among the nonzero
  > elements it meets. Conversely, when a later argument presents the model
  > directly on a complete Boolean algebra, the order is that of $B$ with $0_B$
  > removed, and the same clauses apply verbatim.
- `F2` → [[lem-shelah-sweet-forcings-are-sigma-directed-ccc]] (Statement)
  > If $(P,D,(E_n))$ is a sweetness model, then $D$, and hence $P$, is a countable
  > union of directed subsets. Consequently every antichain in $P$ is countable, so
  > $P$ satisfies the countable chain condition.
- `F3` → [[lem-shelah-sweet-density-transfer-along-complete-suborders]] (Statement)
  > Assume ZFC. Let $P$ be a complete suborder of $B=BA(Q)$, let
  > $(Q,D,(E_n))$ be a sweetness model, and let $(A_j)_{j<\omega}$ be subsets of
  > $P$ whose union is dense in $P$. Write $e:Q\to B\setminus\{0_B\}$ for the
  > canonical dense completion map, and use Shelah's quotient convention
  > 
  > $$p\Vdash_P q\in Q/P\quad\Longleftrightarrow\quad
  >   \text{every }p_0\in P\text{ with }p_0\le p
  >   \text{ is compatible in }B\text{ with }e(q).$$
  > 
  > Suppose $q\in D$ and $p\in P$ forces $q\in Q/P$. Then some $j,k<\omega$ have
  > the following uniform property: for every $q'\mathrel{E_k}q$ there is
  > $p'\in A_j$ with $p'\le p$ which forces $q'\in Q/P$. Moreover, the union of
  > all $A_j$ for which such a $k$ exists is dense below $p$. This is the full
  > two-part conclusion of Claim 7.4 of the source, in the library order.

### [[thm-shelah-sweet-partial-isomorphism-extension]]

Let $B_0$ and $B_1$ be countably generated complete subalgebras of a sweet
complete Boolean algebra $B$, and let $h:B_0\to B_1$ be a complete Boolean
isomorphism. There is a sweet complete Boolean algebra $B^*$ containing $B$
completely in which $h$ extends to an automorphism of $B^*$. The extension may
be chosen compatibly with any previously fixed sweetness-model embedding.

**Facts & Assumptions (verbatim).**

**Given:** A sweetness model on $B$, complete subalgebras $B_0,B_1\le B$ generated by countable sets of generators, and a complete Boolean isomorphism $h:B_0\to B_1$.

[F1] [[thm-shelah-sweet-amalgamation-preserves-sweetness]]: amalgamating two sweet complete algebras over a common complete subalgebra yields a sweet complete algebra in which both are complete subalgebras and the amalgamation is sweet; applied with the two named embeddings of the partially mapped subalgebra, it extends a partial isomorphism to a map with a larger domain or range.

[F2] [[lem-shelah-continuous-unions-of-sweetness-models]]: the direct union of an increasing $\omega$-chain of sweetness models is sweet and each stage is complete in the union.

[F3] [[def-complete-boolean-algebra-and-regular-open-sets]]: complete Boolean homomorphisms preserve all joins and infima, so an automorphism of the union extending the chain of isomorphisms is unique on the completion.

[F4] [[def-axiom-of-choice]]: used exactly for the simultaneous selection of the countably many data that code the requests in the induction.

**Cited clauses (verbatim quotes from the proof contract).**

- `F1` → [[thm-shelah-sweet-amalgamation-preserves-sweetness]] (Statement)
  > The formulation also permits two named complete embeddings of $P_0$, by identifying their images before taking the amalgam.
- `F2` → [[lem-shelah-continuous-unions-of-sweetness-models]] (Statement)
  > Let $(P_i,D_i,(E^i_n))_{i<\delta}$ be a continuous increasing chain of sweetness models, where $\delta$ has countable cofinality and every successor extends its predecessor in the exact sweetness-model sense.
- `F3` → [[def-complete-boolean-algebra-and-regular-open-sets]] (Definition)
  > Its proposed operations, justified by [[thm-regular-open-sets-form-a-complete-boolean-algebra]], are $$\bigvee\mathcal U=\operatorname{int}\overline{\bigcup\mathcal U},\qquad \bigwedge\mathcal U=\operatorname{int}\bigcap\mathcal U,\qquad \neg U=\operatorname{int}(X\setminus U)=X\setminus\overline U.$$ Here the empty union is $\varnothing$ and the empty intersection is $X$; finite meets will be ordinary finite intersections, and the bounds will be $\varnothing,X$.
- `F4` → [[def-axiom-of-choice]] (Definition)
  > The **Axiom of Choice** (AC) is the following statement.

### [[thm-shelah-universal-meagre-composition-preserves-sweetness]]

If $P$ has a sweetness model and $P$ forces that $Q$ is $\mathrm{UM}$, then the
two-step iteration $P*Q$ has a sweetness model extending that of $P$. This
remains true in the strengthened extension-of-models form used at successor
stages.

**Facts & Assumptions (verbatim).**

**Given:** A sweetness model $(P,D,E_n)$ and the two-step iteration $P*\dot{\mathrm{UM}}$ of [[def-two-step-forcing-iteration]], whose second coordinate is a $P$-name for a condition of the forcing $\mathrm{UM}$ of [[def-shelah-universal-meagre-forcing]]; write $q\Vdash\eta\in\dot T$ for forced node membership.

[F1] [[def-shelah-sweetness-model]]: the sequential and transfer clauses of $(P,D,E_n)$ and the extension relation between sweetness models.

[F2] [[def-shelah-universal-meagre-forcing]]: $\mathrm{UM}$ and its order; the union $T_1\cup T_2$ of two conditions' witness trees with a common initial tree is again a perfect nowhere-dense tree with that initial tree.

[F3] [[lem-shelah-sweet-density-transfer-along-complete-suborders]]: the corresponding source claim in the two-part uniform form; it supplies, for any old class $A$ and any $q\in D$, a modulus $k$ such that the trace of $A$ below an $E_k$-equivalent strengthening of $q$ mirrors the trace below $q$.

[F4] [[thm-forcing-theorem]]: forcing equivalence and definability, used to replace an arbitrary name $\dot Q$ forced to be $\mathrm{UM}$ by the ground-model $\mathrm{UM}$, and to certify the sequential clause in the iteration.

**Cited clauses (verbatim quotes from the proof contract).**

- `F1` → [[def-shelah-sweetness-model]] (Definition)
  > The library order convention is used throughout: a forcing preorder $P$ carries a
  > reflexive transitive relation in which $q\le p$ means that $q$ is stronger than
  > $p$ ([[def-forcing-preorder-compatibility-and-filter]]).
  > 
  > A **Shelah sweetness model** is a triple $(P,D,(E_n)_{n<\omega})$ such that
  > 
  > - $P$ is a forcing preorder and $D\subseteq P$ is dense;
  > - each $E_n$ is an equivalence relation on $D$ with countably many classes, and
  >   $E_{n+1}$ **refines** $E_n$, that is, $p\mathrel{E_{n+1}}p'$ implies
  >   $p\mathrel{E_n}p'$;
  > - every $E_n$-class is **downward directed**: any two members of the class have a
  >   common lower bound that also belongs to the class;
  > 
  > and the two clauses below hold.
  > 
  > **Sequential clause.** If $p_i\in D$ for every $i\le\omega$ and
  > $p_i\mathrel{E_i}p_\omega$ for every $i<\omega$, then $\{p_i:i\le\omega\}$ has a
  > common lower bound; moreover for every $n<\omega$ the tail
  > $\{p_i:n\le i\le\omega\}$ has a common lower bound that lies in the $E_n$-class
  > of $p_\omega$.
  > 
  > **Transfer clause.** For all $p,q\in D$ and every $n<\omega$ there is
  > $k<\omega$ such that for every $p'\mathrel{E_k}p$: if some $r\mathrel{E_n}q$
  > satisfies $r\le p$, then some $r'\mathrel{E_n}q$ satisfies $r'\le p'$.
  > 
  > **Comparable form.** The transfer clause is equivalent to the following
  > statement, which is the form used below whenever a condition has to be
  > synchronized with a comparable one. If $q\le p$ in $D$ and $n<\omega$, then for
  > some $k<\omega$ every $p'\mathrel{E_k}p$ has a common strengthening inside the
  > $E_n$-class of $q$: there is $q'\mathrel{E_n}q$ with $q'\le q$ and $q'\le p'$.
  > For the forward implication apply the transfer clause to $p,q,n$, using $r=q$
  > as the required witness that some member of the $E_n$-class of $q$ lies below
  > $p$; it yields $r'\mathrel{E_n}q$ with $r'\le p'$, and downward directedness of
  > the class applied to the pair $q,r'$ supplies $q'\mathrel{E_n}q$ with
  > $q'\le q,r'$. For the converse reading, suppose the hypothesis of the transfer
  > clause holds for a triple $p,q,n$ and a witness $r\mathrel{E_n}q$ with $r\le p$;
  > applying the comparable form to the pair $r\le p$ and to $n$ gives a single $k$
  > such that every $p'\mathrel{E_k}p$ has a common strengthening with $r$ inside
  > the class of $r$, which is also the class of $q$, and this $k$ serves the
  > transfer clause, because $E_n$-equivalent conditions determine the same
  > $E_n$-class.
  > 
  > **Extension of sweetness models.** A sweetness model
  > $M_2=(P_2,D_2,(E^2_n))$ **extends** $M_1=(P_1,D_1,(E^1_n))$ when
  > 
  > - $P_1$ is a complete suborder of $P_2$, that is, $P_1\subseteq P_2$, the order
  >   and incompatibility relations on $P_1$ are the restrictions of those on
  >   $P_2$, and every maximal antichain of $P_1$ is maximal in $P_2$. This is not
  >   a density requirement: an arbitrary condition of $P_2$ need not have a
  >   stronger condition in $P_1$;
  > - $D_1\subseteq D_2$;
  > - each old $E^1_n$ is the restriction of $E^2_n$ to $D_1$;
  > - for every $p\in D_1$ and every $n<\omega$, its $E^2_n$-class is contained in
  >   $P_1$;
  > - whenever $p\in D_2$, $q\in P_1$ and $q\le p$, then $p\in D_1$.
  > 
  > Thus in particular $D_2\cap P_1=D_1$, and the preceding class-containment
  > clause may equivalently say that every $E^2_n$-class meeting $D_1$ is contained
  > in $D_1$. Standard iteration-stage inclusions are complete suborders in this
  > sense.
  > 
  > **Boolean-algebra language.** By
  > [[thm-forcing-equivalence-and-boolean-completion]] the separative quotient and
  > the regular-open completion of $P$ ([[def-complete-boolean-algebra-and-regular-open-sets]])
  > are forcing-equivalent to $P$, with generic filters corresponding by inverse
  > image. A sweetness model on $P$ therefore induces one on the nonzero elements
  > $B\setminus\{0_B\}$ of the completion, with the same dense set and the same
  > equivalence relations restricted to it, because a subset of $B\setminus\{0_B\}$
  > with a common lower bound in $B$ has a common lower bound among the nonzero
  > elements it meets. Conversely, when a later argument presents the model
  > directly on a complete Boolean algebra, the order is that of $B$ with $0_B$
  > removed, and the same clauses apply verbatim.
- `F2` → [[def-shelah-universal-meagre-forcing]] (Definition): *omitted by the bundle cap — open `items/def-shelah-universal-meagre-forcing.md` and read it before deciding anything that rests on it.*
- `F3` → [[lem-shelah-sweet-density-transfer-along-complete-suborders]] (Statement)
  > Assume ZFC. Let $P$ be a complete suborder of $B=BA(Q)$, let
  > $(Q,D,(E_n))$ be a sweetness model, and let $(A_j)_{j<\omega}$ be subsets of
  > $P$ whose union is dense in $P$. Write $e:Q\to B\setminus\{0_B\}$ for the
  > canonical dense completion map, and use Shelah's quotient convention
  > 
  > $$p\Vdash_P q\in Q/P\quad\Longleftrightarrow\quad
  >   \text{every }p_0\in P\text{ with }p_0\le p
  >   \text{ is compatible in }B\text{ with }e(q).$$
  > 
  > Suppose $q\in D$ and $p\in P$ forces $q\in Q/P$. Then some $j,k<\omega$ have
  > the following uniform property: for every $q'\mathrel{E_k}q$ there is
  > $p'\in A_j$ with $p'\le p$ which forces $q'\in Q/P$. Moreover, the union of
  > all $A_j$ for which such a $k$ exists is dense below $p$. This is the full
  > two-part conclusion of Claim 7.4 of the source, in the library order.
- `F4` → [[thm-forcing-theorem]] (Statement)
  > For every fixed membership formula $\varphi$, forcing is uniformly definable from P and its name parameters over a transitive ZF ground model M and satisfies the truth lemma for every M-generic G. If externally an M-generic filter through every condition is available, then
  > 
  > $$p\Vdash^M\varphi(\vec\tau)\quad\Longleftrightarrow\quad\forall G\ (G\text{ is M-generic and }p\in G\ \Longrightarrow\ M[G]\models\varphi(\vec\tau_G)).$$
  > 
  > The definability assertion is a scheme indexed by fixed formulas. Existence of generics is an extra hypothesis for the displayed semantic characterization, not for the forcing predicate or truth lemma. ZF suffices.

### [[thm-singular-value-decomposition-for-compact-operators]]

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let $H$ and
$K$ be real or complex Hilbert spaces ([[def-hilbert-space]]), let
$T\in\mathcal B(H,K)$ be a compact operator
([[def-compact-linear-operator]]), let $|T|$ and the singular values $s_n(T)$ be
as in the absolute-value definition
([[def-absolute-value-and-singular-values-of-a-compact-operator]]), and put
$$r:=\dim\operatorname{ran}T\in\mathbb N\cup\{\infty\}$$
([[def-dimension]]), so that $r$ is also the number of positive singular values
counted with multiplicity. Let
$$J:=\begin{cases}\{1,\dots,r\},&r<+\infty,\\ \mathbb N,&r=+\infty,\\ \varnothing,&T=0,\end{cases}$$
the empty case occurring only for $r=0$. Index the positive singular values
with multiplicity as $(s_j)_{j\in J}$ in nonincreasing order. Then:

1. there are orthonormal families $(e_j)_{j\in J}$ in $(\ker T)^\perp$ and
   $(f_j)_{j\in J}$ in $\overline{\operatorname{ran}T}$, indexed by exactly $J$,
   with $|T|e_j=s_je_j$ and $f_j=s_j^{-1}Te_j$ for every $j\in J$;
2. for every $x\in H$ the series converges in norm and
   $$Tx=\sum_{j\in J}s_j\langle x,e_j\rangle f_j,$$
   and its finite partial sums
   $T_n:=\sum_{j\le n}s_j\langle\cdot,e_j\rangle f_j$ satisfy
   $\|T-T_n\|\le s_{n+1}$ for every $n$ with $n+1\in J$ (and $T_n=T$ for
   $n\ge r$ when $r<+\infty$);
3. the linear map $U$ defined on the span of $\{e_j:j\in J\}$ by $Ue_j:=f_j$,
   extended by continuity to $(\ker T)^\perp$ and by zero on $\ker T$, is a
   **partial isometry** with
   $$T=U|T|,\qquad U^*U=P_{(\ker T)^\perp},\qquad U^*U\text{ is the orthogonal projection onto }(\ker T)^\perp,$$
   and $UU^*$ the orthogonal projection onto $\overline{\operatorname{ran}T}$;
4. the zero-padded sequence $(s_n(T))_{n\ge1}$ is *not* used to index the
   orthonormal systems: the systems carry exactly the index set $J$ of the
   positive singular values, and the terms $s_n(T)=0$ beyond the rank in the
   finite-rank case are numerical padding only.

**Facts & Assumptions (verbatim).**

**Given:** Countable Choice, compact $T:H\to K$, its absolute value $|T|$, the rank $r=\dim\operatorname{ran}T$, the index set $J$ of the positive singular values with multiplicity, and the zero-padded sequence $(s_n(T))$.

[A1] **Absolute value and rank.** $|T|$ is compact, self-adjoint and positive with $|T|^2=T^*T$, $\||T|x\|=\|Tx\|$ and $\ker|T|=\ker T$; the positive singular values with multiplicity are the positive eigenvalues of $|T|$ with multiplicity; they are finite in number exactly when $r<+\infty$, that is in the finite-rank case, and the index set $J$ is at most countable; the map $\Phi:\operatorname{ran}|T|\to\operatorname{ran}T$, $\Phi(|T|x)=Tx$, is an isometric linear bijection, so $\dim\operatorname{ran}|T|=\dim\operatorname{ran}T=r$ ([[def-absolute-value-and-singular-values-of-a-compact-operator]], [[def-dimension]]).

[A2] **Spectral theorem for $|T|$.** The nonzero eigenvalues of $|T|$ are positive, have finite-dimensional eigenspaces $E_\lambda$, are mutually orthogonal across distinct $\lambda$, and their closed span is $(\ker|T|)^\perp=\overline{\operatorname{ran}|T|}$; moreover $\ker|T|=\ker T$ and $H=(\ker T)^\perp\oplus\ker T$, so the closed span of the eigenspaces is $(\ker T)^\perp$ ([[thm-spectral-theorem-for-compact-self-adjoint-operators]], [[lem-eigenspaces-of-a-self-adjoint-operator-are-orthogonal]], [[def-eigenvalue-eigenvector-eigenspace-and-spectrum]], [[def-orthogonality-and-orthogonal-complement]], [[thm-orthogonal-decomposition-by-a-closed-subspace]]).

[A3] **Bases and expansion.** Every finite-dimensional eigenspace $E_\lambda$ has an orthonormal basis ([[cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases]]); an orthonormal family is complete in a closed subspace in the case, and only in the case, that the finite-subset net of Fourier sums converges there, with Parseval and Bessel inequalities available ([[thm-hilbert-space-fourier-expansion]], [[thm-parseval-equivalences-for-a-complete-orthonormal-family]], [[lem-finite-bessel-inequality]], [[def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis]]).

[A4] **Continuity.** Bounded operators are continuous and satisfy $\|Sx\|\le\|S\|\|x\|$; limits are unique ([[def-bounded-linear-operator]], [[thm-bounded-linear-operator-equivalences]], [[def-operator-norm]], [[def-metric-convergence]]).

[A5] Countable Choice supplies, for the at most countable eigenvalue list, one orthonormal basis of each finite-dimensional eigenspace ([[def-countable-choice]], [[def-countable]]).

**Cited clauses (verbatim quotes from the proof contract).**

- `A1` → [[def-absolute-value-and-singular-values-of-a-compact-operator]] (Definition)
  > Assume the Axiom of Countable Choice ([[def-countable-choice]]).
- `A1` → [[def-dimension]] (Definition)
  > Let $V$ be a vector space over a field $F$ ([[def-vector-space]]).
- `A2` → [[thm-spectral-theorem-for-compact-self-adjoint-operators]] (Statement)
  > Assume the Axiom of Countable Choice ([[def-countable-choice]]).
- `A2` → [[lem-eigenspaces-of-a-self-adjoint-operator-are-orthogonal]] (Statement)
  > Assume the Axiom of Countable Choice ([[def-countable-choice]]).
- `A2` → [[def-eigenvalue-eigenvector-eigenspace-and-spectrum]] (Definition)
  > Let $V$ be a vector space over a field $F$ and let $T:V\to V$ be linear.
- `A2` → [[def-orthogonality-and-orthogonal-complement]] (Definition)
  > Let $V$ be a real or complex inner-product space.
- `A2` → [[thm-orthogonal-decomposition-by-a-closed-subspace]] (Statement)
  > Assume the Axiom of Countable Choice. Let $M$ be a closed linear subspace of a real or complex Hilbert space $H$. Then every $x\in H$ has a unique decomposition $$x=m+n,\qquad m\in M,\quad n\in M^\perp ,$$ so that $H=M\oplus M^\perp$ as a d
- `A3` → [[cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases]] (Statement)
  > Every finite-dimensional real or complex inner product space has an orthonormal basis.
- `A3` → [[thm-hilbert-space-fourier-expansion]] (Statement)
  > Assume the Axiom of Countable Choice ([[def-countable-choice]]).
- `A3` → [[thm-parseval-equivalences-for-a-complete-orthonormal-family]] (Statement)
  > Assume the Axiom of Countable Choice ([[def-countable-choice]]).
- `A3` → [[lem-finite-bessel-inequality]] (Statement)
  > Let $(e_i)_{i\in I}$ be an orthonormal family in a real or complex inner-product space $H$ ([[def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis]]), let $F\subseteq I$ be finite, and for $x\in H$ put $$P_Fx:=\sum_{i\in F}\langle x,e_i\rangle e_i .$$Then:
- `A3` → [[def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis]] (Definition)
  > Let $H$ be a real or complex Hilbert space ([[def-hilbert-space]]), with inner product linear in the first argument and conjugate-linear in the second, and with the induced length $\|v\|=\sqrt{\langle v,v\rangle}$.
- `A4` → [[def-bounded-linear-operator]] (Definition)
  > Let $X$ and $Y$ be normed spaces over the same scalar field $\mathbb K$, read in the real case from [[def-norm-and-normed-space]] and in the complex case from [[rem-real-and-complex-normed-space-convention]].
- `A4` → [[thm-bounded-linear-operator-equivalences]] (Statement)
  > Let $X$ and $Y$ be normed spaces over the same scalar field, and let $T:X\to Y$ be linear.
- `A4` → [[def-operator-norm]] (Definition)
  > Let $X$ and $Y$ be normed spaces over the same scalar field, and let $T:X\to Y$ be bounded in the sense of [[def-bounded-linear-operator]].
- `A4` → [[def-metric-convergence]] (Definition)
  > Let $(X,d)$ be a metric space ([[def-metric-space]]).
- `A5` → [[def-countable-choice]] (Definition)
  > The **Axiom of Countable Choice**, written $\mathrm{AC}_\omega$, is the following statement.
- `A5` → [[def-countable]] (Definition)
  > Recall that a natural number is a von Neumann natural ([[def-natural-numbers]]):

### [[thm-spectral-theorem-for-compact-self-adjoint-operators]]

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let $H$ be a
real or complex Hilbert space ([[def-hilbert-space]]) and let
$T\in\mathcal B(H)$ be a compact self-adjoint operator
([[def-compact-linear-operator]],
[[def-self-adjoint-positive-unitary-and-normal-operator]],
[[def-bounded-linear-operator]]). Let

$$\Sigma:=\{\lambda:\lambda\ \text{is an eigenvalue of}\ T,\ \lambda\ne0\}$$

be its set of nonzero eigenvalues
([[def-eigenvalue-eigenvector-eigenspace-and-spectrum]]), with eigenspaces
$E_\lambda=\ker(T-\lambda I)$ for $\lambda\in\Sigma$. Then:

1. $\Sigma$ is a finite or countably infinite set of **real** numbers, each
   eigenvalue has finite multiplicity in the sense $\dim E_\lambda<+\infty$, and
   for every real $\varepsilon>0$ there are only finitely many
   $\lambda\in\Sigma$ with $|\lambda|\ge\varepsilon$; in particular every
   neighbourhood of a point of $\mathbb F\setminus\{0\}$ contains only finitely
   many elements of $\Sigma$, so the only possible accumulation point of
   $\Sigma$ is $0$;
2. the closed linear span $M$ of $\bigcup_{\lambda\in\Sigma}E_\lambda$ satisfies
   $$M=(\ker T)^\perp=\overline{\operatorname{ran}T}$$
   ([[def-orthogonality-and-orthogonal-complement]]), and $H=M\oplus M^\perp$
   with $M^\perp\subseteq\ker T$;
3. for every $x\in H$ the finite-subset net of $\sum_{\lambda\in\Sigma}\lambda P_\lambda x$
   over the orthogonal projections $P_\lambda$ onto $E_\lambda$ converges in
   norm and
   $$Tx=\sum_{\lambda\in\Sigma}\lambda P_\lambda x ;$$
4. if in addition $H$ is a complex Hilbert space, then the nonzero spectrum
   agrees with the nonzero eigenvalues,
   $$\sigma(T)\cap\{\mu\in\mathbb C:\mu\ne0\}=\Sigma .$$

No Hilbert basis of $\ker T$ is selected anywhere: only the orthonormal bases of
the finite-dimensional eigenspaces $E_\lambda$, $\lambda\ne0$, are used.

**Facts & Assumptions (verbatim).**

**Given:** Countable Choice, a real or complex Hilbert space $H$, a compact self-adjoint $T\in\mathcal B(H)$, the set $\Sigma$ of nonzero eigenvalues, their eigenspaces $E_\lambda=\ker(T-\lambda I)$, and $M:=\overline{\operatorname{span}}\bigcup_{\lambda\in\Sigma}E_\lambda$ (the closed linear span).

[A1] **Self-adjointness and eigenspaces.** $q(x)=\langle Tx,x\rangle$ is real and $\langle Tx,y\rangle=\langle x,Ty\rangle$ for all $x,y$; $E_\lambda=\ker(T-\lambda I)$ is the eigenspace of $\lambda$ and is a linear subspace ([[def-self-adjoint-positive-unitary-and-normal-operator]], [[def-hilbert-space-adjoint]], [[thm-hilbert-adjoint-properties]], [[def-eigenvalue-eigenvector-eigenspace-and-spectrum]], [[def-linear-subspace]], [[def-kernel-and-image-of-a-linear-map]]).

[A2] **Extremal eigenvalue and orthogonality.** Every nonzero compact self-adjoint operator has $\|S\|$ or $-\|S\|$ as an eigenvalue with a unit eigenvector ([[lem-norm-point-of-a-compact-self-adjoint-operator-is-an-eigenvalue-up-to-sign]]); eigenvalues of a self-adjoint operator are real and distinct eigenspaces are orthogonal ([[lem-eigenspaces-of-a-self-adjoint-operator-are-orthogonal]]); $E_\lambda$ and $E_\lambda^\perp$ are closed $T$-invariant subspaces on which $T$ satisfies the self-adjoint identity ([[lem-orthogonal-complement-of-an-eigenspace-is-invariant]]).

[A3] **Compactness and closed subspaces.** $T$ is compact exactly when $\overline{T(\overline B)}$ is a compact subset of $H$, where $\overline B=\{x\in H:\|x\|\le1\}$ ([[def-compact-linear-operator]], [[def-metric-ball]]); scalar multiples and continuous images of compact sets are compact ([[thm-compactness-under-continuous-maps]]); a closed subset of a compact space is compact ([[thm-closed-subspace-of-a-compact-space-is-compact]]); a compact metric space is sequentially compact, choice-free ([[thm-compact-implies-the-other-compactness-forms]]); a closed subspace of a complete metric space is complete, in ZF ([[thm-complete-subspace-iff-closed]]); $\mathcal B(H)$ is a Banach space and $H$ is a Banach space ([[def-banach-space]], [[def-bounded-linear-operator]]).

[A4] **Subspace compactness.** If $W$ is a closed subspace of $H$, the inclusion $\iota:W\to H$ is a bounded linear operator and $T\iota$ is compact ([[lem-compositions-with-a-compact-operator-are-compact]], [[def-bounded-linear-operator]], [[def-operator-norm]]).

[A5] **Finite dimension.** A normed space has compact closed unit ball exactly when it admits an ordered basis of finite length ([[thm-closed-unit-ball-compact-iff-finite-dimensional]]); every finite-dimensional real or complex inner product space has an orthonormal basis, the empty one in dimension zero ([[cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases]]); an orthonormal family is linearly independent with unit vectors ([[def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis]]).

[A6] **Orthogonal complements and expansion.** For every subset $S$, $S^\perp$ is a closed linear subspace; $u\perp v$ means $\langle u,v\rangle=0$ ([[def-orthogonality-and-orthogonal-complement]], [[lem-orthogonal-complement-is-closed]]); $M^{\perp\perp}=\overline M$ for a linear subspace $M$ ([[thm-double-orthogonal-complement-is-closure]]); $H=M\oplus M^\perp$ for closed $M$, with unique decomposition ([[thm-orthogonal-decomposition-by-a-closed-subspace]]); the finite-subset net of $\sum_j\langle x,e_j\rangle e_j$ converges to $x$ for a complete orthonormal family, with Parseval's identity ([[thm-hilbert-space-fourier-expansion]], [[thm-parseval-equivalences-for-a-complete-orthonormal-family]]); finite Bessel: $\sum_{j\in F}|\langle x,e_j\rangle|^2\le\|x\|^2$ ([[lem-finite-bessel-inequality]]); a square-summable orthogonal family has a norm-convergent finite-subset net whose limit has the sums of the squared norms ([[lem-square-summable-orthogonal-families-have-norm-convergent-finite-sums]], [[def-square-summable-family-on-an-arbitrary-index-set]]).

[A7] **Cardinality and Archimedes.** Under $\mathrm{AC}_\omega$ a countable union of at most countable sets is at most countable, and subsets of at most countable sets are at most countable ([[thm-countable-union-of-countable]], [[lem-subset-of-countable]], [[def-countable]], [[def-countable-choice]]); for every real $\varepsilon>0$ there is a natural $n\ge1$ with $1/n<\varepsilon$ ([[cor-archimedean-reciprocal]]).

[A8] **Continuity, limits, scalars.** Bounded linear operators are continuous with $\|Tx\|\le\|T\|\,\|x\|$ ([[def-bounded-linear-operator]], [[thm-bounded-linear-operator-equivalences]], [[def-operator-norm]]); limits of sequences are unique ([[def-metric-convergence]], [[lem-metric-limits-unique]]); the complex distance is $d(z,w)=|z-w|$ ([[def-complex-metric-convergence-and-continuity]]); the inner product is additive and homogeneous in the first argument ([[def-real-and-complex-inner-product-space]]).

[A9] **Spectrum.** For a complex Banach space, $\mu\in\rho(T)$ means $\mu I-T$ is bijective with bounded inverse, $\sigma(T)=\mathbb C\setminus\rho(T)$, and every eigenvalue lies in $\sigma(T)$ ([[def-spectrum-and-resolvent-of-a-bounded-operator]]).

**Cited clauses (verbatim quotes from the proof contract).**

- `A1` → [[def-self-adjoint-positive-unitary-and-normal-operator]] (Definition)
  > Assume the Axiom of Countable Choice, and let $H$ be a real or complex Hilbert space with $T\in\mathcal B(H)$ a bounded linear operator and $T^*$ its Hilbert adjoint ([[def-hilbert-space-adjoint]], [[def-space-of-bounded-linear-operators]]).
- `A1` → [[def-hilbert-space-adjoint]] (Definition)
  > Assume the Axiom of Countable Choice. Let $H$ and $K$ be real or complex Hilbert spaces and let $T\in\mathcal B(H,K)$ be a bounded linear operator ([[def-bounded-linear-operator]], [[def-space-of-bounded-linear-operators]]). For fixed $y\in
- `A1` → [[thm-hilbert-adjoint-properties]] (Statement)
  > Assume the Axiom of Countable Choice. Let $H,K,L$ be real or complex Hilbert spaces and let $S\in\mathcal B(H,K)$, $T\in\mathcal B(K,L)$ be bounded linear operators. Then the Hilbert adjoints satisfy: 1. $(aT+bS)^*=\overline a\,T^*+\overlin
- `A1` → [[def-eigenvalue-eigenvector-eigenspace-and-spectrum]] (Definition)
  > Let $V$ be a vector space over a field $F$ and let $T:V\to V$ be linear.
- `A1` → [[def-linear-subspace]] (Definition)
  > Let $V$ be a vector space over a field $F$ ([[def-vector-space]]).
- `A1` → [[def-kernel-and-image-of-a-linear-map]] (Definition)
  > For a linear map $T:V\to W$, its **kernel** and **image** are respectively $$\ker T:=\{v\in V:T(v)=0_W\},\qquad \operatorname{im}T:=\{T(v):v\in V\}.$$ That both sets are linear subspaces, and that a trivial kernel characterises injectivity, is proved in [[thm-linear-kernel-image-and-injectivity]].
- `A2` → [[lem-norm-point-of-a-compact-self-adjoint-operator-is-an-eigenvalue-up-to-sign]] (Statement)
  > Assume the Axiom of Countable Choice ([[def-countable-choice]]).
- `A2` → [[lem-eigenspaces-of-a-self-adjoint-operator-are-orthogonal]] (Statement)
  > Assume the Axiom of Countable Choice ([[def-countable-choice]]).
- `A2` → [[lem-orthogonal-complement-of-an-eigenspace-is-invariant]] (Statement)
  > Assume the Axiom of Countable Choice ([[def-countable-choice]]).
- `A3` → [[def-compact-linear-operator]] (Definition)
  > Let $X$ and $Y$ be normed spaces over the same scalar field $\mathbb K$, read in the real case from [[def-norm-and-normed-space]] and in the complex case from [[rem-real-and-complex-normed-space-convention]].
- `A3` → [[def-metric-ball]] (Definition)
  > Let $(X,d)$ be a metric space ([[def-metric-space]]), let $x \in X$ and let $r \in \mathbb{R}$ with $r > 0$ ([[def-real-order]]).
- `A3` → [[thm-compactness-under-continuous-maps]] (Statement)
  > Let $(X, \mathcal{T}_X)$ and $(Y, \mathcal{T}_Y)$ be topological spaces ([[def-topological-space]]), and let $\mathbb{R}$ carry its usual topology, the metric topology of $d_{\mathbb{R}}(s,t) = |s-t|$ ([[lem-real-line-is-a-metric-space]], [[def-metric-topology]], [[def-metrizable-space]]).
- `A3` → [[thm-closed-subspace-of-a-compact-space-is-compact]] (Statement)
  > Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]), with subspaces as in [[def-subspace-topology-top]] and compactness as in [[def-compact-space]].
- `A3` → [[thm-compact-implies-the-other-compactness-forms]] (Statement)
  > Let $(X,d)$ be a metric space ([[def-metric-space]]), with compactness as in [[def-metric-compactness]] and the three variants as in [[def-metric-compactness-variants]].
- `A3` → [[thm-complete-subspace-iff-closed]] (Statement)
  > Let $(X,d)$ be a metric space ([[def-metric-space]]) and let $A \subseteq X$ carry the subspace metric $d_A$ ([[def-isometry-and-metric-embedding]]).
- `A3` → [[def-banach-space]] (Definition)
  > Let $V$ be a normed space in the sense of [[def-norm-and-normed-space]], with induced metric $d(x,y)=\|x-y\|$.
- `A3` → [[def-bounded-linear-operator]] (Definition)
  > Let $X$ and $Y$ be normed spaces over the same scalar field $\mathbb K$, read in the real case from [[def-norm-and-normed-space]] and in the complex case from [[rem-real-and-complex-normed-space-convention]].
- `A4` → [[lem-compositions-with-a-compact-operator-are-compact]] (Statement)
  > Let $W$, $X$, $Y$ and $Z$ be normed spaces over the same scalar field.
- `A4` → [[def-bounded-linear-operator]] (Definition)
  > Let $X$ and $Y$ be normed spaces over the same scalar field $\mathbb K$, read in the real case from [[def-norm-and-normed-space]] and in the complex case from [[rem-real-and-complex-normed-space-convention]].
- `A4` → [[def-operator-norm]] (Definition)
  > Let $X$ and $Y$ be normed spaces over the same scalar field, and let $T:X\to Y$ be bounded in the sense of [[def-bounded-linear-operator]].
- `A5` → [[thm-closed-unit-ball-compact-iff-finite-dimensional]] (Statement)
  > Let $X$ be a normed space over $\mathbb K\in\{\mathbb R,\mathbb C\}$ and write $$\overline B_X:=\{x\in X:\|x\|\le1\}.$$ Then the following are equivalent.
- `A5` → [[cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases]] (Statement)
  > Every finite-dimensional real or complex inner product space has an orthonormal basis.
- `A5` → [[def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis]] (Definition)
  > **Hilbert basis**, or **orthonormal basis**, of $H$ is a complete orthonormal
  > family in $H$.
- `A6` → [[def-orthogonality-and-orthogonal-complement]] (Definition)
  > Let $V$ be a real or complex inner-product space.
- `A6` → [[lem-orthogonal-complement-is-closed]] (Statement)
  > For every subset $S$ of a real or complex inner-product space $V$, the orthogonal complement $S^\perp$ is a closed linear subspace of $V$ for the induced norm topology.
- `A6` → [[thm-double-orthogonal-complement-is-closure]] (Statement)
  > Assume the Axiom of Countable Choice. Let $M$ be a linear subspace of a real or complex Hilbert space $H$. Then $$M^{\perp\perp}=\overline{M},$$ where $\overline M$ is the norm closure of $M$ and $M^{\perp\perp}=(M^\perp)^\perp$.
- `A6` → [[thm-orthogonal-decomposition-by-a-closed-subspace]] (Statement)
  > Assume the Axiom of Countable Choice. Let $M$ be a closed linear subspace of a real or complex Hilbert space $H$. Then every $x\in H$ has a unique decomposition $$x=m+n,\qquad m\in M,\quad n\in M^\perp ,$$ so that $H=M\oplus M^\perp$ as a d
- `A6` → [[thm-hilbert-space-fourier-expansion]] (Statement)
  > Assume the Axiom of Countable Choice ([[def-countable-choice]]).
- `A6` → [[thm-parseval-equivalences-for-a-complete-orthonormal-family]] (Statement)
  > Assume the Axiom of Countable Choice ([[def-countable-choice]]).
- `A6` → [[lem-finite-bessel-inequality]] (Statement)
  > Let $(e_i)_{i\in I}$ be an orthonormal family in a real or complex inner-product space $H$ ([[def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis]]), let $F\subseteq I$ be finite, and for $x\in H$ put $$P_Fx:=\sum_{i\in F}\langle x,e_i\rangle e_i .$$Then:
- `A6` → [[lem-square-summable-orthogonal-families-have-norm-convergent-finite-sums]] (Statement)
  > Assume the Axiom of Countable Choice ([[def-countable-choice]]).
- `A6` → [[def-square-summable-family-on-an-arbitrary-index-set]] (Definition)
  > Throughout, $\mathbb F$ is $\mathbb R$ or $\mathbb C$ and families are indexed by an arbitrary set $I$, with no enumeration or countability assumed.
- `A7` → [[thm-countable-union-of-countable]] (Statement)
  > **Assume the Axiom of Countable Choice** ([[def-countable-choice]]).
- `A7` → [[lem-subset-of-countable]] (Statement)
  > Let $A$ be at most countable ([[def-countable]]) and let $B \subseteq A$.
- `A7` → [[def-countable]] (Definition)
  > Recall that a natural number is a von Neumann natural ([[def-natural-numbers]]):
- `A7` → [[def-countable-choice]] (Definition)
  > The **Axiom of Countable Choice**, written $\mathrm{AC}_\omega$, is the following statement.
- `A7` → [[cor-archimedean-reciprocal]] (Statement)
  > Let $F$ be a complete ordered field ([[def-complete-ordered-field]]) and let $\varepsilon \in F$ with $\varepsilon > 0$.
- `A8` → [[def-bounded-linear-operator]] (Definition)
  > Let $X$ and $Y$ be normed spaces over the same scalar field $\mathbb K$, read in the real case from [[def-norm-and-normed-space]] and in the complex case from [[rem-real-and-complex-normed-space-convention]].
- `A8` → [[thm-bounded-linear-operator-equivalences]] (Statement)
  > Let $X$ and $Y$ be normed spaces over the same scalar field, and let $T:X\to Y$ be linear.
- `A8` → [[def-operator-norm]] (Definition)
  > Let $X$ and $Y$ be normed spaces over the same scalar field, and let $T:X\to Y$ be bounded in the sense of [[def-bounded-linear-operator]].
- `A8` → [[def-metric-convergence]] (Definition)
  > Let $(X,d)$ be a metric space ([[def-metric-space]]).
- `A8` → [[lem-metric-limits-unique]] (Statement)
  > Let $(X,d)$ be a metric space ([[def-metric-space]]) and let $(x_k)$ be a sequence in $X$ ([[def-metric-convergence]]).
- `A8` → [[def-complex-metric-convergence-and-continuity]] (Definition)
  > For $z=x+iy$ and $w=u+iv$, put $$ d_{\mathbb C}(z,w):=|z-w|=\sqrt{(x-u)^2+(y-v)^2}=\lVert(x-u,y-v)\rVert_2.
- `A8` → [[def-real-and-complex-inner-product-space]] (Definition)
  > Let $\mathbb F$ be $\mathbb R$ or $\mathbb C$, with **conjugation** $z\mapsto\overline z$ the identity on $\mathbb R$ and complex conjugation on $\mathbb C$ ([[def-complex-conjugate-real-imaginary-part-and-modulus]]).
- `A9` → [[def-spectrum-and-resolvent-of-a-bounded-operator]] (Definition)
  > Let $X$ be a complex Banach space ([[def-banach-space]], [[def-complex-metric-convergence-and-continuity]]) and let $T\in\mathcal B(X)$ be a bounded linear operator ([[def-bounded-linear-operator]], [[def-space-of-bounded-linear-operators]]).

### [[thm-strongly-compact-relative-consistency-normal-moore]]

$\operatorname{Con}(\mathrm{ZFC} + \text{there is a strongly compact cardinal})$
implies $\operatorname{Con}(\mathrm{ZFC} + \mathrm{NMSC})$, where NMSC is the
normal Moore space conjecture. No ground-model implication and no actual
strongly compact cardinal is asserted
([[thm-lc-strong-compactness-product-measure-extension-interface]]).

**Facts & Assumptions (verbatim).**

**Given:** The metatheoretic assumption $\operatorname{Con}(\mathrm{ZFC} + \text{a strongly compact cardinal})$.

[F1] The published product-measure interface: $\operatorname{Con}(\mathrm{ZFC}+\text{a strongly compact cardinal})$ implies $\operatorname{Con}(\mathrm{ZFC}+\mathrm{PMEA})$, the PMEA sentence being exactly the full-domain extension axiom of [[def-product-measure-extension-axioms-pmea-and-pmea-sigma]] ([[thm-lc-strong-compactness-product-measure-extension-interface]]).

[F2] $\mathrm{ZFC} + \mathrm{PMEA}$ proves NMSC ([[thm-pmea-implies-normal-moore-space-conjecture]]).

[F3] A verified finite-proof reduction turns a fixed formal proof of a first-order statement into the corresponding consistency implication: if $T$ proves $\varphi$ then $\operatorname{Con}(T)$ implies $\operatorname{Con}(T+\varphi)$ ([[thm-formal-relative-consistency-from-verified-proof-reduction]]).

[F4] Both theories are formulated over $\mathrm{ZFC}$ with $\mathrm{AC}$ explicit ([[def-axiom-of-choice]]).

**Cited clauses (verbatim quotes from the proof contract).**

- `F1` → [[def-product-measure-extension-axioms-pmea-and-pmea-sigma]] (Definition)
  > Work in $\mathrm{ZFC}$. Let $\lambda$ be a cardinal and let $2^\lambda = \{0,1\}^\lambda$ be the set of all functions $\
- `F1` → [[thm-lc-strong-compactness-product-measure-extension-interface]] (Statement)
  > Binding product-measure target: Con(ZFC + a strongly compact cardinal) implies Con(ZFC + PMEA), where for every cardinal
- `F2` → [[thm-pmea-implies-normal-moore-space-conjecture]] (Statement)
  > $\mathrm{ZFC} + \mathrm{PMEA}$ proves the normal Moore space conjecture: every normal Moore space is metrizable. Already
- `F3` → [[thm-formal-relative-consistency-from-verified-proof-reduction]] (Statement)
  > If an arithmetic base B verifies a total code map r and $\forall p(\operatorname{Prf}_U(p,\ulcorner\bot\urcorner)\to\ope
- `F4` → [[def-axiom-of-choice]] (Definition)
  > The **Axiom of Choice** (AC) is the following statement. > Every family of nonempty sets has a choice function > ([[def-

### [[thm-trace-class-iff-product-of-two-hilbert-schmidt-operators]]

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let $H$ and $K$
be real or complex Hilbert spaces ([[def-hilbert-space]]), let $E$ be a Hilbert
basis of $H$ and $G$ a Hilbert basis of $K$ (both supplied as data), and let
$T\in\mathcal B(H,K)$ be compact ([[def-compact-linear-operator]]). Then:

1. **(factorization of a trace-class operator)** if $T$ is trace class
   ([[def-trace-class-operator]]), then, with $|T|$, $U$ and the singular system
   of $T$ ([[def-absolute-value-and-singular-values-of-a-compact-operator]],
   [[thm-singular-value-decomposition-for-compact-operators]]), the operators
   $$B:=|T|^{1/2}\in\mathcal B(H),\qquad A:=U|T|^{1/2}\in\mathcal B(H,K)$$
   satisfy $T=AB$, are both Hilbert–Schmidt relative to $E$
   ([[def-hilbert-schmidt-operator]]), and
   $$\|A\|_{HS,E}=\|B\|_{HS,E}=\|T\|_1^{1/2},$$
   so that $\|A\|_{HS,E}\|B\|_{HS,E}=\|T\|_1$: the trace norm is attained by this
   factorization;
2. **(products of Hilbert–Schmidt operators are trace class)** conversely, if
   there are a real or complex Hilbert space $H_0$ with a supplied Hilbert basis
   $E_0$, a Hilbert–Schmidt operator $B\in\mathcal B(H,H_0)$ relative to $E$ and a
   Hilbert–Schmidt operator $A\in\mathcal B(H_0,K)$ relative to $E_0$ with
   $T=AB$, then $T$ is trace class and
   $$\|T\|_1\le\|A\|_{HS,E_0}\|B\|_{HS,E};$$
   in particular $AB$ is compact and $\|T\|\le\|A\|_{HS,E_0}\|B\|_{HS,E}$.

The bases $E$, $E_0$, $G$ are supplied data; no existence of a Hilbert basis is
asserted or used, and the adjoint-stability of the Hilbert–Schmidt norm across
$G$ is the imported invariance theorem.

**Facts & Assumptions (verbatim).**

**Given:** Countable Choice, Hilbert spaces $H,H_0,K$, supplied Hilbert bases $E$ of $H$, $E_0$ of $H_0$, $G$ of $K$, and a compact $T\in\mathcal B(H,K)$.

[A1] **Trace norm.** $T$ is trace class exactly when $\sum_n s_n(T)<+\infty$, and then $\|T\|_1=\sum_ns_n(T)$ and $\|T\|=s_1(T)\le\|T\|_1$ ([[def-trace-class-operator]], [[def-absolute-value-and-singular-values-of-a-compact-operator]]).

[A2] **SVD.** With $J$ the index set of positive singular values, $Tx=\sum_{j\in J}s_j\langle x,e_j\rangle f_j$ in norm, $|T|e_j=s_je_j$, $(e_j)$ and $(f_j)$ orthonormal, $U$ is the partial isometry with $Ue_j=f_j$ on $(\ker T)^\perp$ extended by zero on $\ker T$, $U|T|=T$, and $U$ is isometric on $(\ker T)^\perp$ with range $\overline{\operatorname{ran}T}$; moreover $|T|=\sum_js_j\langle\cdot,e_j\rangle e_j$ ([[thm-singular-value-decomposition-for-compact-operators]], [[def-absolute-value-and-singular-values-of-a-compact-operator]]).

[A3] **Hilbert–Schmidt calculus.** The Hilbert–Schmidt norm is basis-independent and adjoint-stable, and $\|SB\|_{HS}\le\|S\|\|B\|_{HS}$ for bounded $S$; a Hilbert–Schmidt operator is compact; composites of compact operators with bounded ones are compact ([[thm-hilbert-schmidt-operators-form-a-two-sided-ideal]], [[thm-hilbert-schmidt-norm-is-basis-independent]], [[thm-hilbert-schmidt-operators-are-compact]], [[def-hilbert-schmidt-operator]], [[lem-compositions-with-a-compact-operator-are-compact]], [[def-operator-norm]]).

[A4] **Parseval, Bessel, collapse of suprema.** For a Hilbert basis and any vector, the squared norm is the sum of the squared moduli of the coefficients; Bessel's inequality bounds finite coefficient sums for orthonormal families; for nonnegative families indexed by two sets the finite-subset suprema may be interchanged, $\sup_{F,G}\sum_{e\in F,j\in G}c_{e,j}=\sup_{G,F}\sum_{j\in G,e\in F}c_{e,j}$ ([[thm-parseval-equivalences-for-a-complete-orthonormal-family]], [[lem-finite-bessel-inequality]], [[def-square-summable-family-on-an-arbitrary-index-set]], [[def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis]]).

[A5] **Cauchy–Schwarz and boundedness.** $|\langle u,v\rangle|\le\|u\|\|v\|$ and the pairing is linear in the first argument and conjugate-linear in the second; $\|Sv\|\le\|S\|\|v\|$ and $\|ST\|\le\|S\|\|T\|$ ([[thm-cauchy-schwarz-in-an-inner-product-space]], [[def-real-and-complex-inner-product-space]], [[def-bounded-linear-operator]], [[thm-hilbert-adjoint-properties]], [[def-metric-convergence]]).

**Cited clauses (verbatim quotes from the proof contract).**

- `A1` → [[def-trace-class-operator]] (Definition)
  > Assume the Axiom of Countable Choice ([[def-countable-choice]]).
- `A1` → [[def-absolute-value-and-singular-values-of-a-compact-operator]] (Definition)
  > Assume the Axiom of Countable Choice ([[def-countable-choice]]).
- `A2` → [[thm-singular-value-decomposition-for-compact-operators]] (Statement)
  > Assume the Axiom of Countable Choice ([[def-countable-choice]]).
- `A2` → [[def-absolute-value-and-singular-values-of-a-compact-operator]] (Definition)
  > Assume the Axiom of Countable Choice ([[def-countable-choice]]).
- `A3` → [[thm-hilbert-schmidt-operators-form-a-two-sided-ideal]] (Statement)
  > Assume the Axiom of Countable Choice ([[def-countable-choice]]).
- `A3` → [[thm-hilbert-schmidt-norm-is-basis-independent]] (Statement)
  > Assume the Axiom of Countable Choice ([[def-countable-choice]]).
- `A3` → [[thm-hilbert-schmidt-operators-are-compact]] (Statement)
  > Assume the Axiom of Countable Choice ([[def-countable-choice]]).
- `A3` → [[def-hilbert-schmidt-operator]] (Definition)
  > Throughout, $H$ and $K$ are real or complex Hilbert spaces with the pairing linear in the first argument and conjugate-linear in the second ([[def-hilbert-space]]), $T\in\mathcal B(H,K)$ is a bounded linear operator ([[def-bounded-linear-operator]], [[def-space-of-bounded-linear-operators]]) of operator norm $\|T\|$ ([[def-operator-norm]]), and $E$ is a **Hilbert basis** of $H$, that is, a complet
- `A3` → [[lem-compositions-with-a-compact-operator-are-compact]] (Statement)
  > Let $W$, $X$, $Y$ and $Z$ be normed spaces over the same scalar field.
- `A3` → [[def-operator-norm]] (Definition)
  > Let $X$ and $Y$ be normed spaces over the same scalar field, and let $T:X\to Y$ be bounded in the sense of [[def-bounded-linear-operator]].
- `A4` → [[thm-parseval-equivalences-for-a-complete-orthonormal-family]] (Statement)
  > Assume the Axiom of Countable Choice ([[def-countable-choice]]).
- `A4` → [[lem-finite-bessel-inequality]] (Statement)
  > Let $(e_i)_{i\in I}$ be an orthonormal family in a real or complex inner-product space $H$ ([[def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis]]), let $F\subseteq I$ be finite, and for $x\in H$ put $$P_Fx:=\sum_{i\in F}\langle x,e_i\rangle e_i .$$Then:
- `A4` → [[def-square-summable-family-on-an-arbitrary-index-set]] (Definition)
  > Throughout, $\mathbb F$ is $\mathbb R$ or $\mathbb C$ and families are indexed by an arbitrary set $I$, with no enumeration or countability assumed.
- `A4` → [[def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis]] (Definition)
  > Let $H$ be a real or complex Hilbert space ([[def-hilbert-space]]), with inner product linear in the first argument and conjugate-linear in the second, and with the induced length $\|v\|=\sqrt{\langle v,v\rangle}$.
- `A5` → [[thm-cauchy-schwarz-in-an-inner-product-space]] (Statement)
  > For all vectors $x,y$ in a real or complex inner-product space, $$|\langle x,y\rangle|\le\|x\|\,\|y\| ,$$ with equality if and only if $x$ and $y$ are linearly dependent.
- `A5` → [[def-real-and-complex-inner-product-space]] (Definition)
  > Let $\mathbb F$ be $\mathbb R$ or $\mathbb C$, with **conjugation** $z\mapsto\overline z$ the identity on $\mathbb R$ and complex conjugation on $\mathbb C$ ([[def-complex-conjugate-real-imaginary-part-and-modulus]]).
- `A5` → [[def-bounded-linear-operator]] (Definition)
  > Let $X$ and $Y$ be normed spaces over the same scalar field $\mathbb K$, read in the real case from [[def-norm-and-normed-space]] and in the complex case from [[rem-real-and-complex-normed-space-convention]].
- `A5` → [[thm-hilbert-adjoint-properties]] (Statement)
  > Assume the Axiom of Countable Choice. Let $H,K,L$ be real or complex Hilbert spaces and let $S\in\mathcal B(H,K)$, $T\in\mathcal B(K,L)$ be bounded linear operators. Then the Hilbert adjoints satisfy: 1. $(aT+bS)^*=\overline a\,T^*+\overlin
- `A5` → [[def-metric-convergence]] (Definition)
  > Let $(X,d)$ be a metric space ([[def-metric-space]]).

### [[thm-trace-class-is-a-two-sided-banach-operator-ideal]]

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let $H$, $K$
and $L$ be real or complex Hilbert spaces ([[def-hilbert-space]]). Then:

1. the trace-class operators $\mathcal S_1(H,K)$ ([[def-trace-class-operator]])
   form a linear subspace of $\mathcal B(H,K)$ on which $\|\cdot\|_1$ is a norm,
   and
   $$\|T\|\le\|T\|_1\qquad\text{for every }T\in\mathcal S_1(H,K)$$
   ([[def-operator-norm]]);
2. if $T\in\mathcal S_1(H,K)$ and $A\in\mathcal B(K,L)$, $B\in\mathcal B(H_0,H)$
   are bounded linear operators on Hilbert spaces $H_0,L$, then
   $ATB\in\mathcal S_1(H_0,L)$ and
   $$\|ATB\|_1\le\|A\|\,\|T\|_1\,\|B\| ;$$
3. $(\mathcal S_1(H,K),\|\cdot\|_1)$ is a Banach space: every
   $\|\cdot\|_1$-Cauchy sequence in $\mathcal S_1(H,K)$ has a limit in
   $\mathcal S_1(H,K)$ to which it converges in $\|\cdot\|_1$
   ([[def-banach-space]], [[def-norm-and-normed-space]],
   [[def-metric-space]]).

**Facts & Assumptions (verbatim).**

**Given:** Countable Choice, Hilbert spaces $H,H_0,K,L$, a trace-class operator $T$, bounded operators $A,B$, and the ideal and nuclear-series results.

[A1] **Nuclear characterization.** trace class means that $T$ has a nuclear representation $T=\sum_j\langle\cdot,u_j\rangle v_j$ (operator-norm convergence, $\sum_j\|u_j\|\|v_j\|<+\infty$); the trace norm is the infimum of the nuclear sums and is attained by the singular series; in particular $s_n(T)$ is zero-padded and $\|T\|=s_1(T)$ is bounded by $\|T\|_1$, because $\|T\|=s_1(T)\le\sum_ns_n(T)=\|T\|_1$ ([[lem-nuclear-series-characterizes-trace-norm]], [[def-trace-class-operator]], [[def-absolute-value-and-singular-values-of-a-compact-operator]]).

[A2] **Infimum and series.** The infimum of a nonempty bounded-below set of reals is its greatest lower bound, so for every $\varepsilon>0$ there is an element below $\inf+\varepsilon$; absolute convergence of a scalar family implies summability of the finite-subset net, with the sum of the moduli bounding the modulus of the sum ([[def-infimum]], [[def-square-summable-family-on-an-arbitrary-index-set]], [[def-metric-convergence]]).

[A3] **Ideal calculus.** $\|SB\|_{HS}\le\|S\|\|B\|_{HS}$ and the Hilbert–Schmidt norm is adjoint-stable ([[thm-hilbert-schmidt-operators-form-a-two-sided-ideal]], [[thm-hilbert-adjoint-properties]]); $\|UV\|\le\|U\|\|V\|$ and $\|U^*\|=\|U\|$ for bounded operators ([[lem-composition-operator-norm-inequality]], [[def-bounded-linear-operator]], [[def-operator-norm]]).

[A4] **Cauchy sequences and subsequences.** A sequence in a metric space is Cauchy when for every real $\varepsilon>0$ there is $N$ with $d(x_m,x_n)<\varepsilon$ for $m,n\ge N$; under $\mathrm{AC}_\omega$ one may choose indices $m_1<m_2<\cdots$ with $\|T_{m_{k+1}}-T_{m_k}\|_1<2^{-k}$, and a Cauchy sequence with a convergent subsequence converges to the same limit ([[def-metric-space]], [[def-metric-convergence]], [[def-countable-choice]]).

**Cited clauses (verbatim quotes from the proof contract).**

- `A1` → [[lem-nuclear-series-characterizes-trace-norm]] (Statement)
  > Assume the Axiom of Countable Choice ([[def-countable-choice]]).
- `A1` → [[def-trace-class-operator]] (Definition)
  > Assume the Axiom of Countable Choice ([[def-countable-choice]]).
- `A1` → [[def-absolute-value-and-singular-values-of-a-compact-operator]] (Definition)
  > Assume the Axiom of Countable Choice ([[def-countable-choice]]).
- `A2` → [[def-infimum]] (Definition)
  > Let $S \subseteq \mathbb{R}$ and $\ell \in \mathbb{R}$.
- `A2` → [[def-square-summable-family-on-an-arbitrary-index-set]] (Definition)
  > Throughout, $\mathbb F$ is $\mathbb R$ or $\mathbb C$ and families are indexed by an arbitrary set $I$, with no enumeration or countability assumed.
- `A2` → [[def-metric-convergence]] (Definition)
  > Let $(X,d)$ be a metric space ([[def-metric-space]]).
- `A3` → [[thm-hilbert-schmidt-operators-form-a-two-sided-ideal]] (Statement)
  > Assume the Axiom of Countable Choice ([[def-countable-choice]]).
- `A3` → [[thm-hilbert-adjoint-properties]] (Statement)
  > Assume the Axiom of Countable Choice. Let $H,K,L$ be real or complex Hilbert spaces and let $S\in\mathcal B(H,K)$, $T\in\mathcal B(K,L)$ be bounded linear operators. Then the Hilbert adjoints satisfy: 1. $(aT+bS)^*=\overline a\,T^*+\overlin
- `A3` → [[lem-composition-operator-norm-inequality]] (Statement)
  > Let $X$, $Y$, and $Z$ be normed spaces over the same scalar field.
- `A3` → [[def-bounded-linear-operator]] (Definition)
  > Let $X$ and $Y$ be normed spaces over the same scalar field $\mathbb K$, read in the real case from [[def-norm-and-normed-space]] and in the complex case from [[rem-real-and-complex-normed-space-convention]].
- `A3` → [[def-operator-norm]] (Definition)
  > Let $X$ and $Y$ be normed spaces over the same scalar field, and let $T:X\to Y$ be bounded in the sense of [[def-bounded-linear-operator]].
- `A4` → [[def-metric-space]] (Definition)
  > Throughout, $\mathbb{R}$ is the complete ordered field ([[def-complete-ordered-field]], [[def-ordered-field]]) constructed in this library ([[def-real-numbers]]) and carrying its order ([[def-real-order]]).
- `A4` → [[def-metric-convergence]] (Definition)
  > Let $(X,d)$ be a metric space ([[def-metric-space]]).
- `A4` → [[def-countable-choice]] (Definition)
  > The **Axiom of Countable Choice**, written $\mathrm{AC}_\omega$, is the following statement.

### [[thm-trace-is-absolutely-convergent-and-basis-independent]]

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let $H$ be a
real or complex Hilbert space ([[def-hilbert-space]]) and let
$T\in\mathcal B(H)$ be trace class ([[def-trace-class-operator]]). Then:

1. for every **nuclear representation** $Tx=\sum_j\langle x,u_j\rangle v_j$ of
   $T$ (operator-norm convergence of the partial sums,
   $\sum_j\|u_j\|\|v_j\|<+\infty$), the scalar series $\sum_j\langle v_j,u_j\rangle$
   converges absolutely and
   $$\Bigl|\sum_j\langle v_j,u_j\rangle\Bigr|\le\sum_j\|u_j\|\,\|v_j\| ;$$
2. the sum $\sum_j\langle v_j,u_j\rangle$ depends only on $T$; denoting it
   $\operatorname{tr}(T)$, one has
   $$\operatorname{tr}(T)=\sum_j\langle v_j,u_j\rangle$$
   for **every** nuclear representation of $T$. This defines $\operatorname{tr}(T)$
   without assuming that $H$ has a Hilbert basis;
3. for every supplied Hilbert basis $E$ of $H$,
   $\operatorname{tr}_E(T)=\operatorname{tr}(T)$
   ([[def-trace-of-a-trace-class-operator]]);
4. the trace is linear in the trace-class variable and bounded by the trace
   norm: for trace-class $S,T$ and scalars $a,b$,
   $\operatorname{tr}(aS+bT)=a\operatorname{tr}(S)+b\operatorname{tr}(T)$ and
   $|\operatorname{tr}(T)|\le\|T\|_1$.

**Facts & Assumptions (verbatim).**

**Given:** Countable Choice, a Hilbert space $H$, a trace-class $T\in\mathcal B(H)$, its nuclear representations, and the supplied bases.

[A1] **Nuclear representations exist and compute the trace norm.** trace class means that $T$ has a nuclear representation; the SVD series is one, and $\|T\|_1=\sum_ns_n(T)$ is the infimum of the nuclear sums ([[lem-nuclear-series-characterizes-trace-norm]], [[def-trace-class-operator]], [[thm-singular-value-decomposition-for-compact-operators]], [[def-absolute-value-and-singular-values-of-a-compact-operator]]).

[A2] **Absolute convergence tools.** A nonnegative family has a finite-sum supremum; if the finite subsums are bounded by $C$ then the family is summable with sum at most $C$, and sums of finite subfamilies of a nonnegative family are bounded by the full sum; for a scalar family, absolute summability implies summability with $|\sum|c_i|$ bound. Suprema over finite subsets of two index sets commute. ([[def-square-summable-family-on-an-arbitrary-index-set]], [[def-metric-convergence]])

[A3] **Parseval, Bessel, separable bases.** For a Hilbert basis $G$ of a closed subspace $M$ and $w\in M$, $w=\sum_{g\in G}\langle w,g\rangle g$ with $\|w\|^2=\sum_{g\in G}|\langle w,g\rangle|^2$; for an orthonormal family and any vector the finite coefficient sums obey Bessel; a closed subspace of $H$ with a given countable dense sequence has a finite or countable Hilbert basis obtained from that sequence by Gram–Schmidt, with no choice ([[thm-parseval-equivalences-for-a-complete-orthonormal-family]], [[thm-hilbert-space-fourier-expansion]], [[lem-finite-bessel-inequality]], [[thm-separable-hilbert-space-has-a-countable-orthonormal-basis]], [[def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis]], [[def-dense-top]], [[def-countable]]).

[A4] **Cauchy–Schwarz and pairing.** $|\langle u,v\rangle|\le\|u\|\|v\|$, the pairing is linear in the first argument and conjugate-linear in the second, and $\|Sv\|\le\|S\|\|v\|$ ([[thm-cauchy-schwarz-in-an-inner-product-space]], [[def-real-and-complex-inner-product-space]], [[def-bounded-linear-operator]], [[def-operator-norm]]).

[A5] Countable Choice is the standing hypothesis; the deterministic construction below uses no choice beyond it ([[def-countable-choice]]).

**Cited clauses (verbatim quotes from the proof contract).**

- `A1` → [[lem-nuclear-series-characterizes-trace-norm]] (Statement)
  > Assume the Axiom of Countable Choice ([[def-countable-choice]]).
- `A1` → [[def-trace-class-operator]] (Definition)
  > Assume the Axiom of Countable Choice ([[def-countable-choice]]).
- `A1` → [[thm-singular-value-decomposition-for-compact-operators]] (Statement)
  > Assume the Axiom of Countable Choice ([[def-countable-choice]]).
- `A1` → [[def-absolute-value-and-singular-values-of-a-compact-operator]] (Definition)
  > Assume the Axiom of Countable Choice ([[def-countable-choice]]).
- `A2` → [[def-square-summable-family-on-an-arbitrary-index-set]] (Definition)
  > Throughout, $\mathbb F$ is $\mathbb R$ or $\mathbb C$ and families are indexed by an arbitrary set $I$, with no enumeration or countability assumed.
- `A2` → [[def-metric-convergence]] (Definition)
  > Let $(X,d)$ be a metric space ([[def-metric-space]]).
- `A3` → [[thm-parseval-equivalences-for-a-complete-orthonormal-family]] (Statement)
  > Assume the Axiom of Countable Choice ([[def-countable-choice]]).
- `A3` → [[thm-hilbert-space-fourier-expansion]] (Statement)
  > Assume the Axiom of Countable Choice ([[def-countable-choice]]).
- `A3` → [[lem-finite-bessel-inequality]] (Statement)
  > Let $(e_i)_{i\in I}$ be an orthonormal family in a real or complex inner-product space $H$ ([[def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis]]), let $F\subseteq I$ be finite, and for $x\in H$ put $$P_Fx:=\sum_{i\in F}\langle x,e_i\rangle e_i .$$Then:
- `A3` → [[thm-separable-hilbert-space-has-a-countable-orthonormal-basis]] (Statement)
  > Let $H$ be a real or complex Hilbert space, let $(x_n)_{n\in\mathbb N}$ be a sequence in $H$ whose range $\{x_n :
- `A3` → [[def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis]] (Definition)
  > Let $H$ be a real or complex Hilbert space ([[def-hilbert-space]]), with inner product linear in the first argument and conjugate-linear in the second, and with the induced length $\|v\|=\sqrt{\langle v,v\rangle}$.
- `A3` → [[def-dense-top]] (Definition)
  > Let $(X, \mathcal{T})$ be a topological space, let $\mathcal{B}$ be a basis for $\mathcal{T}$ ([[def-topology-basis-subbasis]]) and let $A \subseteq X$.
- `A3` → [[def-countable]] (Definition)
  > Recall that a natural number is a von Neumann natural ([[def-natural-numbers]]):
- `A4` → [[thm-cauchy-schwarz-in-an-inner-product-space]] (Statement)
  > For all vectors $x,y$ in a real or complex inner-product space, $$|\langle x,y\rangle|\le\|x\|\,\|y\| ,$$ with equality if and only if $x$ and $y$ are linearly dependent.
- `A4` → [[def-real-and-complex-inner-product-space]] (Definition)
  > Let $\mathbb F$ be $\mathbb R$ or $\mathbb C$, with **conjugation** $z\mapsto\overline z$ the identity on $\mathbb R$ and complex conjugation on $\mathbb C$ ([[def-complex-conjugate-real-imaginary-part-and-modulus]]).
- `A4` → [[def-bounded-linear-operator]] (Definition)
  > Let $X$ and $Y$ be normed spaces over the same scalar field $\mathbb K$, read in the real case from [[def-norm-and-normed-space]] and in the complex case from [[rem-real-and-complex-normed-space-convention]].
- `A4` → [[def-operator-norm]] (Definition)
  > Let $X$ and $Y$ be normed spaces over the same scalar field, and let $T:X\to Y$ be bounded in the sense of [[def-bounded-linear-operator]].
- `A5` → [[def-countable-choice]] (Definition)
  > The **Axiom of Countable Choice**, written $\mathrm{AC}_\omega$, is the following statement.
