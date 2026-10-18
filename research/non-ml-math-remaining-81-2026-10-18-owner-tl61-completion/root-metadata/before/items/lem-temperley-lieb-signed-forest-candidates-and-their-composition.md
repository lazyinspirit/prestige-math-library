---
id: lem-temperley-lieb-signed-forest-candidates-and-their-composition
kind: lemma
title: "Signed forest candidates, wall homomorphisms, and their composition"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
deps:
  - def-temperley-lieb-link-state-standard-modules
  - lem-temperley-lieb-link-state-module-action-is-well-defined
  - def-temperley-lieb-spencer-digit-support
  - lem-temperley-lieb-spencer-support-binomial-and-reflection-calculus
  - lem-temperley-lieb-quantum-binomial-digit-criterion
  - lem-temperley-lieb-exact-truncation-reduces-decomposition-to-trivial-factors
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Anton Cox, John Graham and Paul Martin, The blob algebra in positive characteristic"
      url: "https://openaccess.city.ac.uk/id/eprint/377/2/cgm.pdf"
      locator: "§5, Theorems 5.1 and 5.3, Lemma 5.2, and equation (16), PDF pp. 23–34."
    - title: "Robert A. Spencer, The Modular Temperley–Lieb Algebra"
      url: "https://arxiv.org/pdf/2011.01328"
      locator: "§§2.5 and 7.2. The hook parameter is negated here to correct for the positive-loop convention."
---

## Statement

Write $[j]_T$ for the polynomial recurrence $[0]_T=0,[1]_T=1,[j+1]_T=T[j]_T-[j-1]_T$. For a monic diagram $x:a\to b$, bend its $b$ output points around the right edge in reverse order to form a matching on $a+b$ points. Its nesting forest $F(x)$ consists of its $(a+b)/2$ arcs, ordered by containment. For an arc $e$, let $c(e)$ be the number of arcs inside it, counting itself. Define the polynomial hook weight
$$h_F(T)=\frac{[|F|]_T!}{\prod_{e\in F}[c(e)]_T}.$$
For $a\ge b$ of the same parity, define the nonzero vector
$$v_{a,b}=\sum_{x:a\to b\text{ monic}}h_{F(x)}(-\delta)x\in W_{a,b}.$$
Its coefficient on the diagram whose bent forest is a chain is $1$.

For $a\ge b\ge c$ of the same parity, composition modulo propagation less than $c$ satisfies
$$v_{a,b}\circ v_{b,c}=B_{(a-c)/2,(a-b)/2}(-\delta)v_{a,c}.$$
Composition here means attaching the indicated linear combinations of monic diagrams, in source-to-target order.

Let $s_k$ be an available finite place value of [[def-temperley-lieb-spencer-digit-support]]. If $b<a<b+2s_k$ and $a+b+2$ is divisible by $2s_k$, then postcomposition by $v_{a,b}$ induces a nonzero module homomorphism $W_{n,a}\to W_{n,b}$ for every $n\ge a$ of the same parity.

## Facts & Assumptions

**Given:** The diagram modules, quantum integers, support place values and polynomial quantum binomials in the Statement.

[F1] Link-state modules are diagram quotients by smaller propagation, with composition action ([[def-temperley-lieb-link-state-standard-modules]], [[lem-temperley-lieb-link-state-module-action-is-well-defined]]).

[F2] The quantum binomials are integer polynomials and have their factorial identity before specialization ([[lem-temperley-lieb-quantum-binomial-digit-criterion]]). Their zero pattern is the mixed-radix digitwise test proved in [[lem-temperley-lieb-spencer-support-binomial-and-reflection-calculus]].

[F3] Place values and their digit bounds are those of [[def-temperley-lieb-spencer-digit-support]].

[F4] For $n\ge a>0$ with even difference, the shifted adjacent-cup construction gives monic diagrams with a left retraction over every field ([[lem-temperley-lieb-exact-truncation-reduces-decomposition-to-trivial-factors]]).

## Proof

**Given:** The data and hypotheses in the Statement.

1.1 The hook quotient is a polynomial by induction on its forest. Removing the root of a tree cancels its factor $[|F|]_T$, leaving the quotient for its subforest. For a disjoint union of forests of sizes $u,v$, the quotient is $B_{u+v,u}(T)$ times their two quotients, a polynomial by [F2]. The empty forest has weight $1$. For a chain, numerator and denominator cancel completely, so its weight is $1$. All further calculations may therefore be proved in $\mathbb Q(T)$ and then interpreted as identities in $\mathbb Z[T]$, before making any field specialization. [F2, given, construct, algebra]

2.1 We first use loop value $-T$. Consider matchings with a fixed finite number $d$ of cups on a half-infinite ordered row, with all sufficiently far-left sites propagating. A diagram is encoded by the $d$ right cup endpoints, numbered from the right starting at $1$: scanning from right to left, a listed site opens a cup and the next unpaired unlisted site closes the most recent cup; unlisted sites with no open cup propagate. Thus every $d$-element subset of the positive integers encodes exactly one matching. Hook weights are unchanged by adding more leftmost propagating strands, because bending one more such strand adds a root above the entire old forest and cancels its new numerator factor. We may consequently form the formal series $V_d$ of these matchings with their hook weights. Every fixed output coefficient after a local generator or cup attachment involves finitely many terms: only its finitely many cups and the nearest exposed propagating strand can be reconnected. All operations below are defined coefficient by coefficient. [F1, step 1.1, construct, algebra]

3.1 We prove that every local generator kills $V_d$. Fix an output matching $D$ with its simple cup at sites $i,i+1$, and remove that cup to obtain a gap $J$ in $D^-$. A line is exposed to $J$ if an arc from $J$ to an interior point of that line can avoid all other lines. Replacing that line by two lines ending at $i$ and $i+1$ is its nip at $J$. Exactly $D$ itself and these nipped diagrams are the preimages contributing to the coefficient of $D$: a generator changes only the two lines meeting its sites, while the converse reconnection recovers each nip. A line exposed on both sides is nipped only once. Therefore the coefficient is $C_D=-[2]_T h(D)+\sum_{e\text{ exposed to }J}h(\operatorname{nip}_J(e)).$ This enumeration includes loops through the first term and all reconnection terms with coefficient $1$. [F1, step 1.1, step 2.1, algebra]

4.1 Here is a textual reduction verifying this coefficient identity. First contract each intervening fixed internal subforest to a weighted interval block: its total edge count is retained in the containing arc's subtree size and its own hook factors are common to all compared terms. Consecutive exposed arcs then have adjacent block endpoints; relabel these endpoints in their order without changing subtree sizes. Suppose those two arcs have endpoints $(a,b),(b+1,c)$, with all their internal subforests retained, and the distinguished simple cup is immediately beyond them at $(c+1,c+2)$. Replace those two arcs by $(a,c),(b,b+1)$. If their subtree sizes are $E_1,E_2$, their merged subtree has size $E_1+E_2$. Every term in $C_D$ other than the two nips of these arcs corresponds to the replaced diagram with hook ratio $[E_1+E_2]_T/([E_1]_T[E_2]_T)$. Comparing the two exceptional nips with the single exceptional nip after replacement leaves a common rational factor times $[E_2]_T[E_1+E_2+1]_T+[E_1]_T-[E_2+1]_T[E_1+E_2]_T=0.$ To verify the ratios, every unchanged arc contributes the same denominator factor; the changed arcs contribute respectively the subtree sizes $E_1,E_2,E_1+E_2,E_2+1,E_1+E_2+1$. The displayed identity follows by induction on $E_1$ from the recurrence for $[j]_T$, with $E_1=0,1$ as immediate base cases. Thus this replacement preserves the vanishing of $C_D$. The reflected replacement does the same on the other side. Each replacement reduces by one the number of exposed arcs on the chosen side; repeated replacements leave at most one exposed arc on each side. [step 1.1, step 3.1, algebra]

5.1 In the half-infinite setting there is always a leftmost propagating strand beyond all the cups under consideration. Bend that strand and the other output strands to put the distinguished cup and the remaining exposed arcs inside one outer arc. This only adds successive roots as in step 2.1. After the reductions of step 4.1, let the sizes of the optional left and right exposed subtrees be $B,C>0$. Canceling the hook factors of unchanged internal subforests, the four contributions in step 3.1 have the common-factor-normalized sum $-\frac{[2]_T}{[B]_T[C]_T[B+C+2]_T}+\frac1{[B+1]_T[C+1]_T[B]_T[C]_T}+\frac1{[B+1]_T[C]_T[B+C+2]_T}+\frac1{[B]_T[C+1]_T[B+C+2]_T}=0.$ The numerator is $-[2]_T[B+1]_T[C+1]_T+[B+C+2]_T+[B]_T[C+1]_T+[C]_T[B+1]_T$, zero by the same recurrence. If the left subtree is absent, the three terms reduce instead to $-[2]_T/([C]_T[C+2]_T)+1/([C+1]_T[C]_T)+1/([C+1]_T[C+2]_T)$, zero because $[C+2]_T+[C]_T=[2]_T[C+1]_T$. The case of no right subtree is its reflection. If neither is present, the sum is $-[2]_T/[2]_T+1=0$. Thus $C_D=0$ in every case, proving the assertion of step 3.1 as a polynomial identity. [step 1.1, step 2.1, step 3.1, step 4.1, algebra]

6.1 A formal vector killed by every generator is uniquely determined by its coefficient on the fully nested rightmost $d$ cups. Indeed order the endpoint subsets componentwise, with minimum $\{1,\ldots,d\}$. For any other subset $J$, let $i>1$ be its least element with $i-1\notin J$, and replace $i$ by $i-1$ to obtain $K<J$. In the coefficient at $K$ after applying the generator at $i-1,i$, the coefficient at $J$ occurs with coefficient $1$. Every other contributing subset $L$ satisfies $L<J$: nipping a line different from the one producing $J$ moves an endpoint closer to the right boundary, and the loop term is $K<J$. Setting this coefficient to zero therefore determines the coefficient at $J$ from smaller subsets. Componentwise lower sets are finite, so induction applies. This proof is valid over $\mathbb Z[T]$ and after any specialization. [step 2.1, step 3.1, step 5.1, algebra]

6.2 We check when the finite candidate $v_{a,b}$ is killed by every generator. Put $d=(a-b)/2$ and $M=(a+b)/2+1$. The cancellation of steps 3.1–5.1 applies unchanged whenever an enclosing arc or a propagating strand is exposed to the left of the distinguished cup. Only the remaining case has a missing nip: the distinguished cup is not enclosed by another cup, and there is no propagating strand to its left. Number the original input sites $1,\ldots,a$ and let the distinguished cup be $(i,i+1)$. Then every site $1,\ldots,i-1$ is paired within that interval, so $i$ is odd. Add a new leftmost input site $0$ and a new first output site, joined by a propagating strand. Remove $(i,i+1)$ and nip that new strand at its gap, producing the cup $(0,i)$ and a strand from $i+1$ to the new output site. This is the unique additional contributing diagram. Its bent matching has $(a+1+b+1)/2=M$ edges. The new cup $(0,i)$ and the $(i-1)/2$ original cups inside it form a separate tree with $t=(i+1)/2$ edges. Since the original diagram had these $t-1$ cups and the distinguished cup, $1\le t\le d$. Every other edge lies to its right, including the bent strand beginning at $i+1$, so no edge of this tree is comparable with an edge of the remaining forest. Any common roots introduced by auxiliary bending of additional strands cancel as in step 2.1 before this split is counted. By step 1.1 its hook weight consequently factors as $B_{M,t}(T)$ times the polynomial hook weights of those two parts. The uncanceled coefficient is the negative of this missing hook weight. For $a=3,b=1,i=1$, the missing matching has a one-edge component and a two-edge chain, giving $B_{3,1}(T)=[3]_T$, whose negative agrees with the direct coefficient $1-T^2$. [F1, F2, step 1.1, step 3.1, step 5.1, algebra]

7.1 Attaching $V_{s-r}$ to a half-infinite diagram with $r$ cups defines a map to the diagrams with $s$ cups. It commutes with all generators: ordinary surviving diagram compositions commute by associativity, loop terms have the same scalar on both sides, and when a generator joins two propagating strands the failure coefficient is exactly the vanishing coefficient of steps 3.1–5.1 after suppressing unchanged cups. Composing two attachment maps attaches a formal vector with the sum of their cup counts. This vector is killed by every generator, so step 6.1 makes it a scalar multiple of the corresponding $V$. The scalar is obtained on the fully nested output diagram. Its only monic factorization first inserts its inner $u$ cups and then its remaining $v$ cups. Indeed every cup in the first factor must be a cup of the nested output, and choosing any cup forces every cup inside it to be chosen too, since a defect cannot lie inside a cup. With exactly $u$ cups, this selects precisely the $u$ innermost cups; the remaining through strands have their uniquely forced order. After bending, the first factor has two chains of lengths $u,v$ below successive common roots and hence weight $B_{u+v,u}(T)$; the second factor has a chain forest and weight $1$. This gives scalar $B_{u+v,u}(T)$. Restricting the attachment maps to a finite row and discarding diagrams using a site beyond its left boundary preserves this composition identity, because further cup insertion never removes such a site. With $u=(a-b)/2,v=(b-c)/2$, this proves the asserted finite candidate-composition identity over loop value $-T$. [F1, F2, step 1.1, step 2.1, step 5.1, step 6.1, algebra]

7.2 Now specialize $T=-\delta$, so the loop value $-T$ is the required $\delta$. The recurrence gives $[j]_{-\delta}=(-1)^{j-1}[j]_\delta$ by induction. Thus the quantum characteristic and all mixed-radix zero tests are unchanged. The hypotheses give $0<d<s_k$ and $s_k\mid M$. For every $1\le t\le d$, at least one digit of $t$ below place $k$ is positive, while every digit of $M$ at those places is zero. By [F2], $B_{M,t}(-\delta)=0$. Step 6.2 therefore kills every finite failure coefficient. All generators annihilate the candidate. Its chain coefficient is $1$ by step 1.1, so it is nonzero. [F2, F3, step 1.1, step 6.2, algebra]

8.1 Finally, if a linear combination $v\in W_{a,b}$ is killed by all generators, every adjacent cap at the $a$ inputs kills it modulo propagation less than $b$. This follows by factoring the generator as cup followed by cap: insertion of that cup is injective on the relevant monic diagram basis, so zero after insertion implies zero before insertion. Every diagram $n\to a$ of propagation less than $a$ has a cup on its $a$-boundary, and an innermost such cup is adjacent; factoring it off shows that its postcomposition with $v$ is zero modulo propagation less than $b$. Postcomposition consequently descends from the quotient $W_{n,a}$ to $W_{n,b}$ and commutes with the diagram action. Nonzeroness for every $n\ge a$ follows by choosing a monic diagram $z:n\to a$ with a left retraction, by [F4]: because $a>b\ge0$, one has $a>0$, and the shifted adjacent-cup construction gives this retraction over every field without division. Composing a putative zero $zv$ with the retraction would give $v=0$, a contradiction. Step 7.2 supplies precisely this annihilated nonzero $v$ under the stated wall hypotheses. Together with step 7.1 and the substitution in step 7.2, this proves all conclusions. [F1, F4, step 7.1, step 7.2, algebra] ∎

## Remarks

The sign in the hook argument is necessary. At $a=3,b=1,\delta=1$ in characteristic zero, the two coefficients are $-1,1$; they give the invariant vector. Using the positive hook argument $\delta$ would give coefficients $1,1$ and applying the first generator would give twice the adjacent-cup state. The sign correction affects scalar units, not their zero pattern or the decomposition support.
