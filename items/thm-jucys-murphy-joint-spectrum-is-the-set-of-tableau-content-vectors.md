---
id: thm-jucys-murphy-joint-spectrum-is-the-set-of-tableau-content-vectors
kind: theorem
title: "The joint spectrum of the Jucys-Murphy elements is the set of tableau content vectors"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [lem-transposition-class-sum-acts-on-a-specht-module-by-total-content, thm-gelfand-tsetlin-algebra-is-the-diagonal-algebra-in-the-young-basis, def-content-vector-of-a-standard-tableau, def-young-tableau-standard-tableau-and-shape, def-removable-and-addable-nodes-of-a-partition, lem-addable-nodes-of-a-partition-have-distinct-contents, cor-complex-specht-restriction-branching-rule, thm-complex-irreducibles-of-symmetric-groups-are-specht-modules, def-jucys-murphy-elements-of-the-symmetric-group-algebra, def-partition-young-diagram-and-conjugate-partition]
justified_by: []
aliases: []
landmark: true
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Okounkov-Vershik, A New Approach to the Representation Theory of the Symmetric Groups, Selecta Math. (N.S.) 2 (1996) 581-605; complete arXiv repost math/0503040, sections 1-7, printed pp. 7-25"
      url: "https://arxiv.org/pdf/math/0503040"
    - title: "Garsia, Young Seminormal Representation, Murphy Elements and Content Evaluations, UCSD lecture notes (2003), Theorem 3.2, Remark 2.1 and sections 3-5, printed pp. 19-45"
      url: "https://www.math.ucsd.edu/~garsia/somepapers/Youngseminormal.pdf"
verification:
  verified: {"model":"gpt-6.1-sol","verdict":"pass","date":"2026-10-03","scope":"Recovered historical Step5 independent whole-item claim/body/proof read for thm-jucys-murphy-joint-spectrum-is-the-set-of-tableau-content-vectors and actual needed supplier interfaces/source passages from frontier-38-owner-30 reader-19; unchanged reader mathematics. No fresh review or claim that a stamp was issued historically; external recursive proof closure/all bibliography excluded.","delegated_by":"owner via tools/autopilot frontier-38-owner-30 Step5 reader dispatch","content_sha256":"56255a3fa9b0857a2cdb067db29f26fa0651b66f61fe1162ab1edf056b7b4fb8","evidence":["research/frontier-38-owner-30-reader-19.md","research/frontier-38-owner-30-reader-findings-19.json","research/frontier-38-owner-30-dispatch/reader-reader-19.result.json","research/frontier-38-owner-30-step5-hash-19-pre.json"],"historical_binding":{"commit":"d90f26208","file":"items/thm-jucys-murphy-joint-spectrum-is-the-set-of-tableau-content-vectors.md","historical_raw_sha256":"493656479684563e5334dac2972291032ee97c4a96059adec3dd8b3835d56f14","transformations":["remove only judge stamp using stripJudgeStamp","publication changed status draft to published; verification metadata excluded from content hash"],"source_snapshot":"sources and source locators included in the exact bound mathematical carrier","read_completed_at":"2026-10-03T08:41:44.941Z"}}
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
---

## Statement

Let $n\ge1$. (a) The elements $X_1,\dots,X_n$ act diagonally in the Young
basis of the previous item: for every standard tableau $T$ of size $n$ and
every $k$, $X_kv_T=c_T(k)v_T$, and the joint eigenspaces are
one-dimensional, indexed by the standard tableaux. (b) A vector
$\alpha=(a_1,\dots,a_n)\in\mathbb Z^n$ occurs as the joint eigenvalue vector
of a $v_T$, equivalently $\alpha=\operatorname{Cont}(T)$ for a standard
tableau $T$, if and only if: (1) $a_1=0$; (2) for every $q>1$ at least one of
$a_q-1,a_q+1$ occurs among $a_1,\dots,a_{q-1}$; (3) if $a_p=a_q$ with $p<q$,
then both $a_p-1$ and $a_p+1$ occur among $a_{p+1},\dots,a_{q-1}$. The
association $T\mapsto\operatorname{Cont}(T)$ is a bijection from the standard
tableaux of size $n$ onto this set.

## Facts & Assumptions

**Given:** The chain $S_1\subset\cdots\subset S_n$, the Gelfand-Tsetlin
algebra $\mathrm{GZ}(n)$, the Young lines $\mathbb C v_T=\operatorname{im}P_T$
for the standard tableaux $T$ of size $n$, and the Jucys-Murphy elements
$X_k=\sum_{j<k}(j\ k)$
([[thm-gelfand-tsetlin-algebra-is-the-diagonal-algebra-in-the-young-basis]],
[[def-jucys-murphy-elements-of-the-symmetric-group-algebra]]). The Young lines are considered in each irreducible $S^\lambda_{\mathbb C}$ and, collectively, in the multiplicity-free sum $\bigoplus_{\lambda\vdash n}S^\lambda_{\mathbb C}$, as in the preceding diagonal-algebra construction.

[F1] The transposition class sum $T_m$ acts on the complex Specht module of shape $\nu\vdash m$ by $z_\nu=n(\nu')-n(\nu)=\sum_{(r,c)\in[\nu]}(c-r)$. Its character value for $m\ge2$ is $\dim(S^\nu_{\mathbb C})z_\nu/\binom{m}{2}$; the denominator is not used for $m=0,1$. The scalar is proved independently by a polytabloid coefficient count, without seminormal forms. ([[lem-transposition-class-sum-acts-on-a-specht-module-by-total-content]])

[F2] The complex Specht modules $S^\lambda_{\mathbb C}$ are a complete
irredundant list of finite-dimensional irreducible complex $S_m$-modules;
for $\lambda\vdash m$ the restriction
$\operatorname{Res}^{S_m}_{S_{m-1}}S^\lambda_{\mathbb C}\cong
\bigoplus_{x\in\operatorname{Rem}(\lambda)}S^{\lambda-x}_{\mathbb C}$
([[thm-complex-irreducibles-of-symmetric-groups-are-specht-modules]],
[[cor-complex-specht-restriction-branching-rule]]).

[F3] Contents, content vectors and the content $c(x)=c-r$ of the node
$(r,c)$ are as defined in [[def-content-vector-of-a-standard-tableau]];
standard tableaux and shapes are as in
[[def-young-tableau-standard-tableau-and-shape]]; addable and removable
nodes are as in [[def-removable-and-addable-nodes-of-a-partition]], and
distinct addable nodes of a partition have distinct contents
([[lem-addable-nodes-of-a-partition-have-distinct-contents]]).

[F4] The Young lines of each shape give a basis of the corresponding irreducible. Each $X_k$ lies in $\mathrm{GZ}(n)$ and acts by a scalar on those lines; $\mathrm{GZ}(n)$ is maximal commutative
([[thm-gelfand-tsetlin-algebra-is-the-diagonal-algebra-in-the-young-basis]]).

## Proof

1.1 For a standard tableau $T$, let $\lambda^{(k)}$ be the shape of its entries $1,\ldots,k$. The Young line $L_T$ lies in the corresponding irreducible summand at each level of the restriction chain by [F2] and the given diagonal-algebra construction. For $k\ge2$, $T_k$ and $T_{k-1}$ therefore act on this line by $z_{\lambda^{(k)}}$ and $z_{\lambda^{(k-1)}}$. Since $X_k=T_k-T_{k-1}$, [F1] gives its eigenvalue as their difference, the content of the one node added at step $k$. For $k=1$, $X_1=0$ and entry $1$ occupies $(1,1)$, of content zero. Thus $X_kv_T=c_T(k)v_T$ for all $k$. [F1, F2, F3, F4, given, algebra]

1.2 Every tableau content vector satisfies (1) and (2): entry $1$ lies in $(1,1)$, and any later node has a left or upper neighbour of smaller entry and content respectively one less or one greater. Nodes of a fixed content lie on a northwest-to-southeast diagonal, and their entries strictly increase along it: the right neighbour of an earlier diagonal node lies before the next diagonal node. If entries $p<q$ have equal content, their nodes are $(r,c)$ and $(r+d,c+d)$ for $d\ge1$. The nodes $(r,c+1)$ and $(r+1,c)$ exist because the later node does, and their entries lie strictly between $p$ and $q$ by row/column increase along paths inside the diagram. Their contents are respectively $c-r+1$ and $c-r-1$, proving (3). [F3, given, algebra]

2.1 We prove the precise criterion needed to construct a tableau. Let a nonempty standard tableau have content vector $\beta$ and shape $\lambda$. An integer $t$ is an addable content exactly when (A) $t-1$ or $t+1$ occurs in $\beta$, and (B) after every occurrence of $t$, both neighbours $t-1,t+1$ occur later in $\beta$. First suppose the diagonal of content $t$ is absent. Then $t\ne0$. If $t>0$, absence means $\lambda_1\le t$; content $t+1$ is also absent, and content $t-1$ occurs exactly when $\lambda_1\ge t$. Thus (A) says $\lambda_1=t$, exactly when $(1,t+1)$ is addable. If $t<0$, transpose the diagram: absence means the first column has height at most $-t$, and (A) says its height is exactly $-t$, exactly when the new bottom node of content $t$ is addable. In these cases (B) is vacuous. [F3, step 1.2, algebra]

3.1 Suppose instead that the last node of content $t$ is $x=(r,c)$, with $c-r=t$. Any addable node of that content must be $(r+1,c+1)$: a diagram is closed under moving northwest, so all earlier nodes on the same diagonal already exist and a later one would require its immediate predecessor. This next node is addable exactly when both $u=(r,c+1)$ and $v=(r+1,c)$ exist. If they exist, each entry is larger than the entry of $x$ and their contents are $t+1,t-1$, so (A) and (B) hold, since $x$ has the largest entry among the content-$t$ nodes. Conversely, if $u$ is absent, every content-$(t+1)$ node $(a,a+t+1)$ has $a<r$: a node with $a>r$ would force a content-$t$ node in its own row beyond $x$, and $a=r$ would be $u$. Its column is then at most $c$, so it is northwest of $x$ and has smaller entry. If $v$ is absent, every content-$(t-1)$ node $(a,a+t-1)$ has $a\le r$: $a\ge r+2$ would force the content-$t$ node $(a-1,a+t-1)$ beyond $x$, while $a=r+1$ would be $v$. Such a node is again strictly northwest of $x$ and has smaller entry. Thus in either absence case (B) fails at the entry of $x$. This proves the criterion completely. [F3, step 1.2, step 2.1, algebra]

4.1 Given $\alpha$ satisfying (1)-(3), start with entry $1$ at $(1,1)$. Suppose its first $q-1$ entries have been placed in a standard tableau. Condition (2) at $q$ is (A) of the criterion, and condition (3) applied to every earlier occurrence of $a_q$ is exactly (B). Steps 2.1 and 3.1 therefore give an addable node of content $a_q$. It is unique by [F3]. Put entry $q$ in that node; the shape remains a Young diagram and standardness holds because every previous entry is smaller. Induction constructs a tableau with content vector $\alpha$. Any tableau with that vector has the same successive shapes and entries, by uniqueness of the addable node at each step, so it is the same tableau. Combined with step 1.2, this proves the asserted bijection. [F3, step 1.2, step 2.1, step 3.1, given, construct]

5.1 The Young lines give a basis in each $S^\lambda_{\mathbb C}$ by [F4] and the given diagonal-algebra theorem; their union is a basis of the specified multiplicity-free sum. By step 1.1 their joint weights are precisely the tableau content vectors. Step 4.1 proves these vectors are distinct: across all shapes, each vector specifies exactly one tableau. In a basis of joint eigenvectors, the eigenspace for a fixed vector is the span of exactly those basis vectors with that weight, because comparing each coordinate coefficient in $X_kv=a_kv$ forces any nonzero coefficient to have that weight for every $k$. Hence each such eigenspace is one-dimensional, and the eigenvalue vectors are exactly the integer vectors satisfying (1)-(3). This proves (a) and (b). [F4, step 1.1, step 1.2, step 4.1, algebra] ∎

## Remarks

The scalar input is the independent polytabloid calculation in [F1]. The character normalization is $\chi^\nu((1\ 2))=\dim(S^\nu_{\mathbb C})z_\nu/\binom{m}{2}$ for $m\ge2$, not its reciprocal. The one-dimensional eigenspace assertion uses each irreducible Young basis, or their multiplicity-free sum. Repeated copies of an irreducible in another representation can enlarge these eigenspaces. All node placements are forced by distinct addable contents; the combinatorial construction requires no additional choice principle.
