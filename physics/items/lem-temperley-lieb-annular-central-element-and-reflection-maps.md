---
id: lem-temperley-lieb-annular-central-element-and-reflection-maps
kind: lemma
title: "The annular central element constructs Temperley–Lieb reflection maps"
status: published
dependency_level: 8
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
deps: [def-temperley-lieb-complex-critical-labels-and-reflection, def-temperley-lieb-link-state-standard-modules, lem-temperley-lieb-link-state-module-action-is-well-defined, lem-temperley-lieb-link-state-restriction-filtration, lem-temperley-lieb-link-state-gram-determinant, thm-temperley-lieb-diagram-generators-span, thm-temperley-lieb-diagram-category-laws, lem-temperley-lieb-generators-satisfy-local-relations, thm-temperley-lieb-generator-normal-form]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "Ridout–Saint-Aubin, Standard Modules, Induction and the Structure of the Temperley–Lieb Algebra"
      url: "https://arxiv.org/pdf/1204.4505"
      locator: "§4 Corollary 4.2; §6; §7 Lemma 7.1 and construction in Theorem 7.2; Appendix A."
---

## Statement

Work over $\mathbb C$, with $q\ne0$, $\delta=q+q^{-1}$. Write $A_n=\mathrm{TL}_n(\mathbb C,\delta)$ and $V_{n,p}=W_{n,n-2p}(\mathbb C,\delta)$. There is a central, reflection-invariant element $F_n\in A_n$ acting on $V_{n,p}$ by
$$f_{n,p}=q^{n-2p+1}+q^{-(n-2p+1)}.$$
When $q\ne\pm1$ and $(n,p)$ is noncritical, restriction splits as $V_{n,p}\downarrow=V_{n-1,p}\oplus V_{n-1,p-1}$. Except at $(n,p,\delta)=(2,1,0)$, induction has a natural exact sequence
$$0\longrightarrow V_{n+1,p+1}\longrightarrow V_{n,p}\uparrow\longrightarrow V_{n+1,p}\longrightarrow0,$$
which splits when $(n,p)$ is noncritical. Here induction of a right module means $V\otimes_{A_n}A_{n+1}$.

If $\kappa=\operatorname{ord}(q^2)\ge2$ and $p<p'$ are a pair reflected in a single intervening critical line, meaning $0<p'-p<\kappa$ and $p=p'+r(n,p')-\kappa$, then
$$\operatorname{Hom}_{A_n}(V_{n,p},V_{n,p'})\ne0.$$
Out-of-range standard modules are zero. Statements about a splitting omit zero summands.

## Facts & Assumptions

**Given:** The diagram algebra, link-state bases, $q,\delta$, and reflection conventions.

[F1] Diagram stacking is associative, reflection is an anti-involution, the elementary diagrams $d_i$ generate, and $d_i^2=\delta d_i$, $d_id_{i\pm1}d_i=d_i$, $d_id_j=d_jd_i$ for $|i-j|>1$ ([[thm-temperley-lieb-diagram-category-laws]], [[thm-temperley-lieb-diagram-generators-span]], [[lem-temperley-lieb-generators-satisfy-local-relations]]). The spanning Jones normal forms are [[thm-temperley-lieb-generator-normal-form]].

[F2] The link-state action and rightmost-site restriction sequence are [[lem-temperley-lieb-link-state-module-action-is-well-defined]] and [[lem-temperley-lieb-link-state-restriction-filtration]].

[F3] For generic $q$ the link-state Gram matrix is invertible, by [[lem-temperley-lieb-link-state-gram-determinant]].

[F4] Criticality and adjacent reflection labels are those of [[def-temperley-lieb-complex-critical-labels-and-reflection]].

## Proof

**Proof technique:** Use an explicit partial closure of braid words, the induced link-state basis, and adjunction.

1.1 It suffices to perform computations for left modules: send a right module to the left module with $a\cdot v=v\cdot a^*$, where $*$ is diagram reflection. This is an exact equivalence preserving Hom direction, induction and restriction. Fix a square root of $q$ and put $g_i=q^{1/2}1-q^{-1/2}d_i$. Expanding with [F1] gives $g_i^{-1}=q^{-1/2}1-q^{1/2}d_i$ and $g_ig_{i+1}g_i=g_{i+1}g_ig_{i+1}$. Let $T_n:A_{n+1}\to A_n$ close the last top endpoint to the last bottom endpoint externally on the right, removing any resulting loop with factor $\delta$. This is an $A_n$-bimodule map by the matching rule. Define $M_n=g_n\cdots g_2g_1^2g_2\cdots g_n$ and $F_n=T_n(M_n)$; set $F_0=\delta$. Every summand of $M_n$ has an even total number of square-root factors, so $F_n$ has coefficients in $\mathbb Z[q,q^{-1}]$, independent of the chosen square root. [F1, given, construct, algebra]

1.2 For clarity give a basis proof of the induction sequence. In left-module notation put $h_r=d_rd_{r+1}\cdots d_n$ for $1\le r\le n$, and $h_{n+1}=1$. A state $d$ is $r$-admissible when it has no adjacent arc at an index $i\ge r$. The tensors $h_r\otimes d$ with $d$ $r$-admissible, including all $1\otimes d$, span $A_{n+1}\otimes_{A_n}V_{n,p}$. First, a diagram word is a sum of $h_ru$ with $u\in A_n$: reverse a spanning Jones normal form from [F1]. Its initial ascending block is either $h_r$ or contains no $d_n$, and every later block lies in $A_n$. The surjection from the presented algebra to the diagram algebra is supplied by the local relations, so this spanning assertion applies to diagram words. Next, if $d$ has its largest adjacent arc at $s\ge r$, write $d=d_sf$. For $n\ge3$ this can be done without division: move the endpoint immediately outside that adjacent arc through the arc, so applying $d_s$ restores $d$ and creates no loop. If $s=1$ use site $3$; otherwise use site $s-1$. The outside site is either a defect or an endpoint of another arc, and reconnecting its former partner supplies the inverse state $f$. Now the relations give $h_r\otimes d=h_{s+2}\otimes d_r\cdots d_{s-1}d$. The latter state is $(s+2)$-admissible: the adjacent arc at $s$ has moved to $r$, all intervening endpoints shift by two, and the tail beyond $s+1$ still has no adjacent arc. Repetition, increasing $r$, proves spanning. At $n=1,2$ the same conclusion is checked on the at most two states, except $n=2,p=1,\delta=0$, when the needed factorization $d=d_1f$ fails. [F1, F2, given, construct, algebra]

2.1 The braid relations give $g_iM_n=M_ng_i$ for $i<n$. To see this directly, commute $g_i$ past all $g_j$ with $|j-i|>1$ in the descending and ascending strings; the remaining equality is $g_ig_{i+1}g_i=g_{i+1}g_ig_{i+1}$ on each side of the middle string. This proves the equality inductively in the length of the strings, starting with $g_1g_2g_1^2g_2=g_2g_1^2g_2g_1$. Bimodule linearity of $T_n$ gives $g_iF_n=F_ng_i$, hence $d_iF_n=F_nd_i$. Thus $F_n$ is central. Reversing the palindromic word $M_n$ and reflecting its closure leaves it unchanged, so $F_n^*=F_n$. [F1, step 1.1, algebra]

3.1 Compute $F_n$ on the state $z_p$ with adjacent arcs $(1,2),(3,4),\ldots,(2p-1,2p)$ and all remaining sites defects. At a cup, expansion of the two adjacent crossings uses the identities $d_ig_{i+1}g_i=-d_id_{i+1}$ and $g_ig_{i+1}d_i=-d_{i+1}d_i$; for example the first is $qd_i-d_id_{i+1}-\delta d_i+q^{-1}d_id_{i+1}d_i=-d_id_{i+1}$. The two minus signs on the two sides of each cup cancel. Thus each initial cup can be removed without changing the coefficient of $z_p$. For the $t=n-2p$ defect strands, expand the auxiliary strand successively from its first crossing. A smoothing connecting two defects vanishes in the standard quotient. There are two remaining continuations: following the auxiliary strand on its two sides gives respectively $q^t\delta-q^{t-1}=q^{t+1}$ and $q^{-t}\delta-q^{-t+1}=q^{-(t+1)}$. The factors arise by choosing the identity smoothing at each subsequent crossing until the final cap; that cap either closes a loop or chooses the second smoothing, giving the displayed two terms on each side. Hence the coefficient of $z_p$ is $f_{n,p}$. For generic $q$, [F3] makes the form nondegenerate. Capping $z$ against $y$ and then attaching $x$ gives the rank-one diagram operator $z\mapsto\phi(y,z)x$, because lower-propagating terms vanish. Thus every nonzero vector generates the standard, which is simple. Centrality now makes $F_n$ scalar on the entire standard: over $\mathbb C$ a central operator has an eigenvalue, whose nonzero eigenspace is the simple module. Since the action matrices and $f_{n,p}$ are Laurent polynomial in $q$, this scalar identity extends to every $q\ne0$. [F1, F2, F3, step 1.1, step 2.1, algebra]

4.1 On the submodule and quotient in [F2], $F_{n-1}$ acts by $f_{n-1,p}$ and $f_{n-1,p-1}$. Their difference is $-(q-q^{-1})(q^{n-2p+1}-q^{-(n-2p+1)})$. Under the noncritical and $q\ne\pm1$ hypotheses it is nonzero. The operator on the restriction satisfies $(F_{n-1}-f_{n-1,p})(F_{n-1}-f_{n-1,p-1})=0$, because each factor kills its respective subquotient. Its two spectral projections therefore give an invariant direct sum splitting the restriction sequence. [F2, F4, step 3.1, algebra]

5.1 Append an adjacent arc at sites $n+1,n+2$ to $d$, obtaining $\bar d\in V_{n+2,p+1}$. The map $\Phi(u\otimes d)=u\bar d$ into $V_{n+2,p+1}\downarrow$ is balanced and $A_{n+1}$-linear: elements of $A_n$ act only on the first $n$ sites. Its image of $h_r\otimes d$ has its rightmost adjacent arc at $r$; deleting that arc recovers $d$. Conversely every $(n+2,p+1)$-state has a rightmost adjacent arc; delete it at position $r$, and the remaining state is $r$-admissible. These two operations are inverse, so the spanning tensors in step 1.2 map bijectively to the link-state basis. They are therefore a basis and $\Phi$ is an isomorphism, except in the stated exceptional case. Applying the restriction sequence [F2] to $V_{n+2,p+1}$ now gives the asserted induction sequence. Applying step 4.1 at rank $n+2$ splits it whenever $(n,p)$ is noncritical, since $n+2-2(p+1)+1=n-2p+1$. [F1, F2, step 4.1, step 1.2, algebra]

6.1 Suppose $(n,p)$ is critical, $q\ne\pm1$, and $z_p$ is as in step 3.1. In the induced basis the coefficient of $h_{2p+1}\otimes z_p$ in $F_{n+1}(1\otimes z_p)$ is $(-1)^n(\delta^2-4)\ne0.$ Here is the local expansion computing it. First take $p=0$. To leave $h_1=d_1\cdots d_n$ after reduction, the first pair of crossings of the closed auxiliary strand has three contributing smoothings, with weights $-1,-1,\delta q^{-1}$; the fourth, of weight $q$, closes off the needed through path. This gives $-2+\delta q^{-1}$. At each of the next $n-1$ pairs exactly one continuation retains the required external matching, of weight $-1$: the other continuation either caps the auxiliary path prematurely or makes an additional bottom arc. At the final pair the corresponding three weights are $-1,-1,\delta q$, giving $-2+\delta q$. Their product is $(-1)^{n-1}(-2+\delta q^{-1})(-2+\delta q)=(-1)^n(\delta^2-4)$. The required exterior matching of $h_1$ has top pair $(1,2)$, bottom pair $(n,n+1)$, and through paths from top $j+2$ to bottom $j$ for $1\le j<n$. Follow the auxiliary strand subject to these connections: a premature cap at an intermediate row would create another exterior arc instead of the required through path, so its continuation is excluded. For $p>0$, remove the first $p$ cups using the two local identities in step 3.1, on both sides of the auxiliary path. This leaves the same computation on $n-2p$ sites; $n-2p>0$ by criticality and $\kappa\ge2$, and its parity equals that of $n$. The target basis tensor is $h_{2p+1}\otimes z_p=h_1\otimes z_p$, by successive $d_id_{i+1}d_i=d_i$ reductions. One may do the cup removal first for $\delta\ne0$ by inserting $\delta^{-1}d_{2j-1}$ at each initial cup. The resulting coefficient identity extends to $\delta=0$: the induced basis reduction in step 1.2 uses no division, so its matrices, and this coefficient, are Laurent polynomials in $q$. Finally $\delta^2-4=(q-q^{-1})^2\ne0$. [F1, F4, step 1.1, step 3.1, step 1.2, step 5.1, algebra]

7.1 In the induction sequence at a critical $(n,p)$ the two standard constituents have the same eigenvalue $f=f_{n+1,p}=f_{n+1,p+1}$. The central endomorphism $F_{n+1}-f$ kills both constituents but is nonzero on the induction by step 6.1. Consequently it factors through the quotient $V_{n+1,p}$ into the submodule $V_{n+1,p+1}$, giving a nonzero map between these adjacent reflected standards. Explicitly, lift a quotient vector to the induction, apply $F_{n+1}-f$, and use the inverse of the submodule injection; the result is independent of the lift because this operator kills the submodule. [F4, step 2.1, step 3.1, step 5.1, step 6.1, construct]

8.1 Every symmetric pair has the form $(n+j,p),(n+j,p+j)$ for a critical $(n,p)$ and $1\le j<\kappa$. For $j\ge2$, induction and restriction at the noncritical labels give $\operatorname{Hom}(V_{n+j,p},V_{n+j,p+j})\cong\operatorname{Hom}(V_{n+j-1,p}\uparrow,V_{n+j,p+j})\cong\operatorname{Hom}(V_{n+j-1,p},V_{n+j,p+j}\downarrow)\cong\operatorname{Hom}(V_{n+j-1,p},V_{n+j-1,p+j-1}).$ In the first and last isomorphisms the extra standard summand has a different $F$-eigenvalue: substitute $q^{2(n-2p+1)}=1$ in step 3.1, and equality would force $j=1$ or $j=\kappa$. Thus its Hom is zero. The middle adjunction is explicit: $f\mapsto(v\mapsto f(1\otimes v))$, with inverse $g\mapsto(a\otimes v\mapsto ag(v))$. This works also when an extraneous summand is out of range. Reducing $j$ to $1$ and applying step 7.1 proves nonvanishing for every reflected pair. Returning along step 1.1 gives all statements for the repository's right modules. [F4, step 1.1, step 3.1, step 4.1, step 5.1, step 7.1, algebra] ∎
