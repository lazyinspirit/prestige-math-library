---
id: thm-jucys-murphy-joint-spectrum-is-the-set-of-tableau-content-vectors
kind: theorem
title: "The joint spectrum of the Jucys-Murphy elements is the set of tableau content vectors"
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [thm-gelfand-tsetlin-algebra-is-the-diagonal-algebra-in-the-young-basis, def-content-vector-of-a-standard-tableau, def-young-tableau-standard-tableau-and-shape, def-removable-and-addable-nodes-of-a-partition, lem-addable-nodes-of-a-partition-have-distinct-contents, cor-complex-specht-restriction-branching-rule, thm-complex-irreducibles-of-symmetric-groups-are-specht-modules, def-jucys-murphy-elements-of-the-symmetric-group-algebra, def-partition-young-diagram-and-conjugate-partition, lem-jucys-murphy-local-relations, cor-the-dimension-of-the-center-of-k-g-is-the-number-of-conjugacy-classes, thm-the-symmetric-group-has-the-coxeter-presentation]
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
    - title: "Garsia, Young Seminormal Representation, Murphy Elements and Content Evaluations, UCSD lecture notes (2003), Theorem 3.2, Remark 3.1 and sections 3-5, printed pp. 19-45"
      url: "https://www.math.ucsd.edu/~garsia/somepapers/Youngseminormal.pdf"
verification:
  precheck: pass
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
[[def-jucys-murphy-elements-of-the-symmetric-group-algebra]]).

[F1] For a partition $\nu\vdash m$ let $n(\nu):=\sum_i(i-1)\nu_i$ and let
$T_m:=\sum_{1\le i<j\le m}(i\ j)$ be the sum of all transpositions of $S_m$.
Then $T_m$ is central in $\mathbb C[S_m]$, and on the irreducible
$S^\nu_{\mathbb C}$ it acts by the scalar
$$z_\nu=n(\nu')-n(\nu)=\sum_{i}\binom{\nu_i}{2}-\sum_{j}\binom{\nu'_j}{2};$$
equivalently $\chi^\nu$ evaluated on the transposition class equals
$\binom{m}{2}z_\nu/f^\nu$. This is the classical transposition eigenvalue;
the two displayed expressions agree for every $\nu$
([[def-partition-young-diagram-and-conjugate-partition]] for $\nu'$).
Garsia proves it by computing the diagonal matrix coefficient of
$T_m$ in the seminormal basis and counting the row and column transpositions
of a tableau, printed pp. 19-21.

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

[F4] Each $X_k$ lies in $\mathrm{GZ}(n)$, so it acts by a scalar on every
Young line $\mathbb C v_T$, and $\mathrm{GZ}(n)$ is maximal commutative
([[thm-gelfand-tsetlin-algebra-is-the-diagonal-algebra-in-the-young-basis]]).

## Proof

**Proof technique:** direct.

1.1 Let $T$ be a standard tableau of size $n$, $\lambda=\operatorname{shape}(T)$, and $L_T:=\mathbb C v_T=\operatorname{im}P_T$. For $1\le k\le n$ let $\lambda^{(k)}:=\operatorname{shape}(T\downarrow[k])$, so $\lambda^{(n)}=\lambda$ and $\lambda^{(k-1)}$ is obtained from $\lambda^{(k)}$ by deleting the node $x_k$ of entry $k$; by [F2] applied along the chain, $L_T\subseteq V^{\lambda^{(k)}}\subseteq V^{\lambda}$ where $V^{\nu}:=S^\nu_{\mathbb C}$ denotes the corresponding summand at each level. [F2, F3, given]

1.2 Necessity of (1). The cell of entry $1$ in a standard tableau has no cell of the diagram weakly above or weakly to its left, so it is the node $(1,1)$; hence $c_T(1)=0$ and (1) holds for $\alpha=\operatorname{Cont}(T)$. [F3, given]

1.3 Necessity of (2). Let $q>1$ and let $(r,c)$ be the node of entry $q$. Since $q>1$ we have $(r,c)\ne(1,1)$; so either $c\ge2$ or $r\ge2$. The left neighbour $(r,c-1)$ (when present) and the upper neighbour $(r-1,c)$ (when present) are cells of the diagram of smaller entry. If $c\ge2$ then the left neighbour is present and has content $c_T(q)-1$; if $c=1$ then $r\ge2$, the upper neighbour is present and has content $c_T(q)+1$. At least one of the two cases occurs, so one of $c_T(q)-1,c_T(q)+1$ occurs among $c_T(1),\dots,c_T(q-1)$. [F3, given]

1.4 Entries increase along a diagonal. If $(r,c)$ and $(r+1,c+1)$ are both nodes of a standard tableau $T$, then $(r,c+1)$ is a node as well, and $T(r,c)<T(r,c+1)<T(r+1,c+1)$ by standardness in row $r$ and column $c+1$. Hence the nodes of content $t$, which form the diagonal chain $x_j:=(j,j+t)$ for $j_0\le j\le J$ (a sequence of cells of the diagram of $\lambda$), carry strictly increasing entries with $j$. [F3, given, algebra]

1.5 Criterion for addable contents. Let $T$ be a standard tableau of size $m\ge1$ with content vector $\beta$, and let $t\in\mathbb Z$. Then $t$ is the content of an addable node of $\lambda=\operatorname{shape}(T)$ if and only if (A) $t-1$ or $t+1$ occurs in $\beta$, and (B) for every $p$ with $\beta_p=t$, both $t-1$ and $t+1$ occur among $\beta_{p+1},\dots,\beta_m$. [F3, given]

1.6 Proof of the criterion, if. Assume (A) and (B); induct on $m$. For $m=1$, $\beta=(0)$, (A) gives $t=\pm1$, and (A) with (B) excludes $t=0$; the addable nodes $(1,2)$ and $(2,1)$ of $(1)$ have contents $1$ and $-1$. For $m\ge2$ let $y$ be the node of entry $m$, $b:=\beta_m=c(y)$, $\nu:=\lambda-y$, $T'':=T\downarrow[m-1]$ and $\beta'':=(\beta_1,\dots,\beta_{m-1})$, the content vector of the standard tableau $T''$ of shape $\nu$. If (A) and (B) hold for $(\nu,\beta'',t)$, then by induction $t$ is the content of an addable node $w$ of $\nu$; since $t=b$ would put an occurrence of $t$ at position $m$ with nothing after it, contradicting (B), we have $t\ne b$, hence $w\ne y$ and $w$ is addable for $\lambda$ as well, because $\nu\cup\{y\}=\lambda$ and $y\ne w$. [F3, given, algebra]

1.7 Otherwise, (A) or (B) fails for $(\nu,\beta'',t)$ while holding for $(\beta,t)$. If (A) fails then the only occurrence of $t\pm1$ in $\beta$ is $\beta_m=b$. If (B) fails for some $p\le m-1$ with $\beta_p=t$, the witness missing between positions $p+1$ and $m-1$ is supplied by position $m$, so again $b\in\{t-1,t+1\}$. Thus $b=t-1$ or $b=t+1$ in the remaining cases. [given, algebra]

1.8 Case $b=t+1$, diagonal of content $t$ empty. Then $\lambda_j<j+t$ whenever $j+t\ge1$. Write $y=(r,c)$, $c=r+t+1$, removable. If $r+t=0$ the node $(r,1)$ is the new row of $\lambda$ ($\lambda_r\ge1$, $\lambda_{r+1}=0$ because $\lambda_{r+1}<r+1+t=1$) and $(r+1,1)$ is an addable node of content $-r=t$. If $r+t\ge1$, then $(r,r+t)$ is a node of $\lambda$ of content $t$, contradicting emptiness of the diagonal. [F3, algebra]

2.1 By [F1] the central element $T_k$ acts on the copy $V^{\lambda^{(k)}}$ by the scalar $z_{\lambda^{(k)}}$ and $T_{k-1}$ acts on $V^{\lambda^{(k-1)}}$ by $z_{\lambda^{(k-1)}}$; since $X_k=T_k-T_{k-1}$ ([[def-jucys-murphy-elements-of-the-symmetric-group-algebra]]) and $L_T\subseteq V^{\lambda^{(k-1)}}\subseteq V^{\lambda^{(k)}}$, the element $X_k$ acts on $L_T$ by the scalar $z_{\lambda^{(k)}}-z_{\lambda^{(k-1)}}$. [F1, F2, step 1.1, given]

2.2 Necessity of (3). Let $p<q$ with $c_T(p)=c_T(q)=t$, and let $x_i=(i,i+t)$ be the node of $p$, $x_{i'}=(i',i'+t)$ the node of $q$; by step 1.4, $i<i'$. If $i'=i+1$: the node $w:=(i+1,i+t)=(i',i'-1+t)$ is the left neighbour of $x_{i'}$ (it lies in row $i'$ since $x_{i'}$ does), it has content $t-1$, and it is the node directly below $x_i$, so $p<$ entry of $w<q$; and the node $z:=(i,i+1+t)=(i'-1,i'+t)$ is the upper neighbour of $x_{i'}$ (it lies in row $i$ because $x_i$ does and $i+1+t\le\lambda_i$), it has content $t+1$, and it lies to the right of $x_i$, so $p<$ entry of $z<q$. If $i'>i+1$: the intermediate diagonal node $x_{i+1}:=(i+1,i+1+t)$ is a node of $\lambda$, and the nodes $w:=(i+1,i+t)$ (left neighbour of $x_{i+1}$, content $t-1$) and $z:=(i,i+1+t)$ (right neighbour of $x_i$, content $t+1$) satisfy $p<$ entry of $w<$ entry of $x_{i+1}<q$ and $p<$ entry of $z<$ entry of $x_{i+1}<q$ by step 1.4 and standardness. In both cases $t-1$ and $t+1$ occur strictly between $p$ and $q$, which is (3). [F3, step 1.4, algebra]

2.3 Occurrences of $t$ in $\beta$ are exactly the diagonal nodes $x_{j_0},\dots,x_J$ of content $t$, and by step 1.4 their entries increase with $j$. Consequently (B) is equivalent to: both $t-1$ and $t+1$ occur after the entry of $x_J$ (for $j<J$ the cells $(j+1,j+t)$ and $(j,j+t+1)$, which exist in $\lambda$ because $x_{j+1}$ does, have contents $t-1,t+1$ and entries strictly between those of $x_j$ and $x_{j+1}$ by step 1.4). [step 1.4, F3, algebra]

2.4 Construction and uniqueness. Let $\alpha\in\mathbb Z^n$ satisfy (1), (2), (3). Define cells $x_1,\dots,x_n$ recursively: $x_1:=(1,1)$ and, given the Young diagram $\Delta_{q-1}=\{x_1,\dots,x_{q-1}\}$ carrying the standard numbering $1,\dots,q-1$, apply the criterion to $(\Delta_{q-1}, (\alpha_1,\dots,\alpha_{q-1}),\alpha_q)$: conditions (2), (3) for $\alpha$ at $q$ are exactly the hypotheses (A), (B) of step 1.5, so $\alpha_q$ is the content of an addable node of $\Delta_{q-1}$, and by [[lem-addable-nodes-of-a-partition-have-distinct-contents]] that node is unique; set $x_q$ equal to it. Then $\Delta_q$ is a Young diagram and the numbering is standard, because the new node is addable and all previous entries are smaller; at the end $T(\alpha)$ is a standard tableau with $\operatorname{Cont}(T(\alpha))=\alpha$. If $T$ is any standard tableau with $\operatorname{Cont}(T)=\alpha$, then induction on $q$ shows that $T\downarrow[q]$ has content vector $(\alpha_1,\dots,\alpha_q)$ and equals the corresponding restriction of $T(\alpha)$: the step follows from the uniqueness of the addable node of content $\alpha_q$. Hence $T=T(\alpha)$, so the correspondence is a bijection. [step 1.5, F3, given, algebra]

3.1 Deleting a node of content $c(x_k)=c-r$ from a partition $\nu$ lowers $n(\nu)$ by $r-1$ and $n(\nu')$ by $c-1$; hence $z_{\lambda^{(k)}}-z_{\lambda^{(k-1)}}=c(x_k)=c_T(k)$ by [F3]. Therefore $X_kv_T=c_T(k)v_T$ for every $k$ and every standard $T$: the Jucys-Murphy elements act diagonally in the Young basis with the content-vector weights, and the weight of the line $L_T$ is $\operatorname{Cont}(T)$. [F1, F3, step 2.1, algebra]

3.2 Proof of the criterion, only-if. Let $x=(i,\lambda_i+1)$ be an addable node of content $t$. If $\lambda_i\ge1$ the left neighbour $(i,\lambda_i)$ is a node of content $t-1$, giving (A); if $\lambda_i=0$ then $i=k+1$ is a new row and the cell $(k,1)$ above it has content $t+1$, giving (A). For (B): put $J=\max\{j:(j,j+t)\in\lambda\}$, so that $x=x_{J+1}$ because $x$ is the node of content $t$ following the diagonal chain. For $j<J$ the claim follows from step 2.3. For $j=J$: since $x$ is addable, $\lambda_J> \lambda_{J+1}$, so the right neighbour $(J,J+t+1)$ of $x_J$ (content $t+1$; it lies in $\lambda$ because $\lambda_J\ge J+t+1$ when $J\ge1$) and the cell $(J+1,J+t)$ (content $t-1$; it is the left neighbour of $x$ because $\lambda_{J+1}=J+t$) both have entries greater than that of $x_J$. When $J=0$ there is no occurrence of $t$ before $x$ and (B) is vacuous. [F3, step 2.3, algebra]

3.3 Case $b=t-1$. Write $y=(r,c)$, so $c=r+t-1$ and $y$ is removable: $\lambda_r=c$ and $\lambda_{r+1}\le c-1$. The node $x:=(r,c+1)=(r,r+t)$ has content $t$; it is addable for $\lambda$ if $r=1$ or $\lambda_{r-1}>\lambda_r=c$. Suppose it is not addable, so $r\ge2$ and $\lambda_{r-1}=c=\lambda_r$. Then $y':=(r-1,c)$ is a node of $\lambda$ of content $t$; the diagonal chain of content $t$ ends at $y'$ (no node $(j,j+t)$ with $j\ge r$ exists, as $\lambda_j\le\lambda_r=c<j+t$ for $j\ge r$), so $y'=x_J$ and by step 2.3 and (B) some node $z$ of content $t+1$ has entry greater than that of $y'$. But any node $(j,j+t+1)$ of $\lambda$ has $j\le r-2$: indeed $j\ge r$ is impossible by $\lambda_j\le\lambda_r=c=r+t-1<j+t+1$, and for $j\le r-2$ the node $(j,j+t+1)$ lies weakly above and weakly left of $y'=(r-1,c)$, so its entry is smaller than that of $y'$ because all cells on the path right along row $j$ to column $c$ and then down column $c$ to row $r-1$ are nodes of $\lambda$ and entries grow along that path. This contradicts the choice of $z$; hence $x$ is addable with content $t$. [F3, step 2.3, step 1.4, algebra]

3.4 Case $b=t+1$, diagonal of content $t$ nonempty. Let $x_J$ be the last node of the diagonal; then $J=r$ and $x_J=(r,r+t)$ is a node of $\lambda$, because $\lambda_r=c=r+t+1\ge r+t$ and no node $(j,j+t)$ has $j\ge r+1$ ($\lambda_{r+1}\le c-1=r+t<(r+1)+t$). By step 2.3 and (B), some node $w=(j,j+t-1)$ of $\lambda$ has entry greater than that of $x_J$. Its right neighbour $(j,j+t)$, if a node of $\lambda$, would be a node of content $t$ with entry greater than that of $w$, hence greater than that of $x_J$, which is impossible as $x_J$ is the last diagonal node. Hence $\lambda_j=j+t-1$, so $(j,j+t)$ is the addable node of row $j$ provided $j=1$ or $\lambda_{j-1}>\lambda_j$. If $j\ge2$ and $\lambda_{j-1}=\lambda_j=j+t-1$, then $y'':=(j-1,j+t-1)$ is a node of $\lambda$ of content $t$; its diagonal index $j-1$ satisfies $j-1\le J=r$, so $j\le r+1$, and then $\lambda_{j-1}\ge\lambda_r=c=r+t+1>j+t-1=\lambda_{j-1}$ by monotonicity of row lengths, a contradiction; while $j\ge r+2$ is impossible because then the diagonal index $j-1$ of $y''$ would exceed $J$. Hence $(j,\lambda_j+1)$ is addable of content $t$. [F3, step 2.3, step 1.4, algebra]

4.1 We record the combinatorial companion, proved in steps 1.2-1.4 and 1.5-3.4: a vector $\alpha\in\mathbb Z^n$ satisfies (1), (2), (3) of the Statement if and only if $\alpha=\operatorname{Cont}(T)$ for exactly one standard tableau $T$ of size $n$. Granting this, the weight map $T\mapsto\operatorname{Cont}(T)$ on the standard tableaux is injective, so the joint eigenspaces of $X_1,\dots,X_n$ are one-dimensional and indexed by the tableaux, and the eigenvalue vectors of the Young basis are exactly the vectors satisfying (1)-(3); with step 3.1 this completes (a) and (b). [F4, step 3.1]

4.2 Steps 3.2 and 1.6-1.8 together with 3.3 and 3.4 prove the criterion of step 1.5 in both directions. [step 1.6, step 1.7, step 3.3, step 1.8, step 3.4, discharge-induction]

5.1 Steps 1.2-1.4 give one implication of the combinatorial companion of step 4.1, the criterion of step 1.5 is proved in steps 1.6-1.8 and 3.2-3.4, and step 2.4 gives the other implication together with uniqueness. This proves the companion and, with steps 3.1 and 4.1, all assertions (a) and (b) of the Statement. [step 3.1, step 2.2, step 4.2, step 2.4] ∎

## Remarks

- **The weights are content vectors.** Step 3.1 is the computation
$c_T(k)=z_{\lambda^{(k)}}-z_{\lambda^{(k-1)}}$, i.e. the eigenvalue of
$X_k$ on the Young line of $T$ is the content of the node carrying $k$.
Only the classical transposition eigenvalue [F1] enters from outside the
page; the rest of the proof is the combinatorial criterion and the
construction of the tableau from its content vector.

- **The two cones of the spectrum.** The row tableau has content vector
$(0,1,\dots,n-1)$ and the column tableau $(0,-1,\dots,-(n-1))$; the
conditions (1)-(3) say that a content vector is a path in the Young graph
read as contents, with the no-fragment condition (3) excluding the patterns
$(a,a+1,a)$ and $(a,a-1,a)$.

- **Choice.** Every choice in the proof is forced: the addable node of a
given content is unique by
[[lem-addable-nodes-of-a-partition-have-distinct-contents]]. No choice
principle is used.
