# Private candidate: normalized Hermitian inequality SDP duality

This is a private proof proposal, not an item, review receipt, or gate result.
No existing carrier or run evidence is changed.

## Diagnosis and proposed interface

The Statement of `lem-qa-16-finite-sdp-strong-duality` concerns real symmetric equality-form SDPs and assumes both primal and dual strict feasibility. The QA30 inequality-form complex Hermitian problem need not have a strict primal point, so that Statement cannot supply its strong duality. However, QA16 proof steps 2.2–3.1 need only an ordinary primal feasible witness and a strict dual point. The proof below establishes the required version directly on the real space of Hermitian matrices, with nonnegative scalar slacks. It does not invoke QA16 as a theorem or assume strict primal feasibility.

The source is van Apeldoorn et al., *Quantum SDP-solvers: Better upper and lower bounds*, <https://arxiv.org/pdf/1705.01843v4>, especially PDF p. 10, read in `research/quantum-algorithms-planning/sources/qa_r5/quantum-sdp-solvers.txt`. That page explicitly assumes dual optimal attainment in order to define the bound `r`; it does not derive dual attainment from `A_1=I`. The distinction is retained here.

## Candidate statement

Let $n\ge0$ and $m\ge1$ be finite integers, let $A_1,\ldots,A_m,C$ be Hermitian $n\times n$ complex matrices with operator norms at most $1$, and let $b\in\mathbb R^m$. Suppose $A_1=I$, $b_1=R>0$, and the primal feasible set is nonempty. Define

$$p^*=\sup\{\operatorname{tr}(CX):X\succeq0,\ \operatorname{tr}(A_jX)\le b_j\ (1\le j\le m)\},\qquad d^*=\inf\{b\cdot y:y\ge0,\ \sum_{j=1}^m y_jA_j-C\succeq0\}.$$

Then the primal feasible set is compact, the primal optimum is attained, and $p^*=d^*\in[-R,R]$. The dual has a point with every coordinate strictly positive and with positive definite matrix slack. If, additionally, the dual has an optimal solution $y^*$ with $\|y^*\|_1\le r$ for a supplied $r\ge1$, then $b\cdot y^*=p^*$ with that same norm bound. Dual attainment and this bound remain additional promises; they are not needed to prove equality of the values or primal attainment.

## Proposed local dependencies, after actual Statement/Definition inspection

- `def-qa-30-sdp-primal-dual-pair`: the Hermitian inequality-form primal/dual convention; it explicitly makes feasibility and attainment separate promises.
- `lem-qa-30-hermitian-product-trace-real`: Hermitian product traces are real, including the empty-matrix case.
- `def-non-negative-and-positive-operator` and `thm-non-negative-operator-characterisations`: positivity and finite real/complex orthonormal nonnegative spectral decomposition.
- `def-trace-of-a-square-matrix`: diagonal-sum definition, including the empty sum. The needed rank-one trace identity is proved below directly from this definition.
- `def-operator-norm` and `thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces`: the quadratic-form bound from an operator-norm bound.
- `thm-heine-borel-rn`, `thm-continuous-image-of-a-compact-space-is-compact`, `thm-compact-subset-is-closed-and-bounded`, and `thm-extreme-value-metric`: finite-dimensional compactness, closedness of compact images, and objective attainment; their Statements require no choice principle.
- `def-metric-interior-closure-boundary`: closure via neighborhoods.
- `thm-strict-separation-of-a-point-from-a-closed-convex-set`: strict separation in the real Euclidean space $\mathbb R^{m+1}$.

`lem-qa-16-finite-sdp-strong-duality` supplies proof context only, not a logical dependency. No arbitrary choice or dependent choice is used. Only finitely many coordinates and eigenvectors occur; the closed-image argument deliberately makes no sequence of witness selections.

## Complete proof

**Given:** The matrices, finite indices, norm bounds, trace constraint, and primal nonemptiness in the candidate statement.

1.1 If $n=0$, the only matrix $X$ is the empty matrix and all traces are zero. Primal nonemptiness implies $b_j\ge0$ for every $j$, and the primal optimum is $0$. Every nonnegative $y$ is dual feasible, so $b\cdot y\ge0$ and $y=0$ attains dual value $0$. The primal singleton is compact. The vector $q_1=m+1$, $q_j=1$ for $j\ge2$ has all coordinates positive, and its empty matrix slack is positive definite in the quadratic-form sense (there is no nonzero vector). Thus all claims hold in this case. Henceforth assume $n\ge1$.

1.2 Let $H_n$ be the real vector space of Hermitian matrices, using the $n$ real diagonal entries and real and imaginary parts of upper off-diagonal entries as explicit coordinates in $\mathbb R^{n^2}$. For Hermitian $U,V$, diagonal-sum multiplication gives

$$\operatorname{tr}(UV)=\sum_i U_{ii}V_{ii}+2\sum_{i<j}\operatorname{Re}(U_{ij}\overline{V_{ij}}).$$

Thus this real pairing is an inner product, with norm $\|U\|_F=(\sum_{i,j}|U_{ij}|^2)^{1/2}$. Its coordinate formula shows that it, matrix quadratic forms, trace, and every linear map used below are continuous. The cone $K=\{X\in H_n:X\succeq0\}$ is convex and closed: it is the intersection, over $v\in\mathbb C^n$, of the closed real half-spaces $v^*Xv\ge0$.

1.3 For any matrix $D$ and column vector $v$, direct summation gives $\operatorname{tr}(Dvv^*)=\sum_{i,k}D_{ik}v_k\overline{v_i}=v^*Dv$. A matrix $X\in K$ has an orthonormal decomposition $X=\sum_i\lambda_i v_iv_i^*$ with $\lambda_i\ge0$. Consequently $\operatorname{tr}(X)=\sum_i\lambda_i$ and $\|X\|_F^2=\operatorname{tr}(X^2)=\sum_i\lambda_i^2$, so $\|X\|_F\le\operatorname{tr}(X)$. For $D\in K$, this decomposition gives $\operatorname{tr}(DX)=\sum_i\lambda_i v_i^*Dv_i\ge0$. Conversely, if $D\in H_n$ pairs nonnegatively with every $X\in K$, testing $X=vv^*$ gives $D\succeq0$. This proves self-duality of $K$ for the real trace inner product. Also, for Hermitian $D$ with $\|D\|\le1$, Cauchy–Schwarz and the operator-norm inequality give $|v^*Dv|\le\|v\|\|Dv\|\le\|v\|^2$, hence $-I\preceq D\preceq I$ and $|\operatorname{tr}(DX)|\le\operatorname{tr}(X)$ for $X\in K$.

2.1 Every primal feasible $X$ has $0\le\operatorname{tr}(X)\le R$, by the first constraint. The feasible set is closed, being the intersection of $K$ and finitely many closed half-spaces, and is bounded in the explicit real coordinates by $\|X\|_F\le R$. It is nonempty by hypothesis, so Heine–Borel and the extreme value theorem make $X\mapsto\operatorname{tr}(CX)$ attain its maximum. The estimate in step 1.3 gives $|\operatorname{tr}(CX)|\le R$ for every feasible $X$, and therefore $p^*\in[-R,R]$.

2.2 For $q_1=m+1$ and $q_j=1$ for $2\le j\le m$, step 1.3 gives

$$S_0:=\sum_j q_jA_j-C=(m+1)I+\sum_{j=2}^m A_j-C\succeq((m+1)-(m-1)-1)I=I.$$

All coordinates of $q$ are at least $1$, so this is a strict point of the dual product cone. If $X$ is primal feasible and $y$ is dual feasible, then

$$b\cdot y-\operatorname{tr}(CX)=\sum_j y_j\bigl(b_j-\operatorname{tr}(A_jX)\bigr)+\operatorname{tr}\bigl((\sum_j y_jA_j-C)X\bigr)\ge0.$$

Thus weak duality gives $p^*\le d^*$; since $q$ is dual feasible, the dual infimum is a finite real number between $p^*$ and $b\cdot q$.

3.1 Put $A(X)=(\operatorname{tr}(A_jX))_{j=1}^m$ and consider the image of the real product cone $K\times\mathbb R_+^m\times\mathbb R_+$ under the linear map

$$\Phi(X,s,a)=(A(X)+s,\operatorname{tr}(CX)-a),\qquad S:=\Phi(K\times\mathbb R_+^m\times\mathbb R_+).$$

The set $S\subseteq\mathbb R^{m+1}$ is a nonempty convex cone and contains $(0,0)$. We prove it closed using only compact images. Fix $z=(u,t)\in\overline S$ and its open neighborhood $V=\{(u',t'):|u'_j-u_j|<1\text{ for all }j,\ |t'-t|<1\}$. For any $(u',t')\in S\cap V$ and any witness $(X,s,a)$, step 2.2 and self-duality give

$$\operatorname{tr}(X)+\sum_j s_j+a\le\operatorname{tr}(S_0X)+q\cdot s+a=q\cdot u'-t'\le\sum_jq_j(|u_j|+1)+|t|+1.$$

Define $B=\sum_jq_j(|u_j|+1)+|t|+2>0$. All witnesses for every point of $S\cap V$ therefore belong to

$$E=\{(X,s,a):X\in K,\ \operatorname{tr}(X)\le B,\ 0\le s_j\le B\ (1\le j\le m),\ 0\le a\le B\}.$$

This is a closed bounded subset of $\mathbb R^{n^2+m+1}$ by step 1.3, hence compact by Heine–Borel. Its continuous image $\Phi(E)$ is compact and closed. Moreover $S\cap V\subseteq\Phi(E)\subseteq S$. Every neighborhood $U$ of $z$ has $U\cap V$ as a neighborhood of $z$ and hence meets $S$, since $z\in\overline S$. Thus $z\in\overline{S\cap V}\subseteq\Phi(E)\subseteq S$. This proves closedness without choosing a witness for each member of a sequence.

4.1 Fix a real $\gamma>p^*$. The point $(b,\gamma)$ is outside $S$: if $A(X)+s=b$ with $X\in K,s\ge0$, then $X$ is primal feasible and $\operatorname{tr}(CX)-a\le p^*<\gamma$ for $a\ge0$. Strict separation supplies $w\in\mathbb R^m$, $\alpha\in\mathbb R$, and $\beta\in\mathbb R$ such that

$$w\cdot u+\alpha t\le\beta<w\cdot b+\alpha\gamma\qquad((u,t)\in S).$$

The points $(0,-a)\in S$ for all $a\ge0$ force $\alpha\ge0$. Let $X_f$ be one primal feasible witness, and put $s_f=b-A(X_f)\ge0$. Then $(b,\operatorname{tr}(CX_f))\in S$. If $\alpha=0$, this point contradicts $w\cdot b\le\beta<w\cdot b$. Hence $\alpha>0$. This is the sole primal-witness use in the separation step; $X_f$ need not be positive definite and its scalar inequalities need not be strict.

4.2 Since $(s,0)\in S$ for every $s\ge0$, scaling each coordinate ray gives $w_j\le0$. Since $(A(hX),\operatorname{tr}(ChX))\in S$ for every $X\in K$ and $h\ge0$, scaling $h$ gives $\operatorname{tr}((\sum_jw_jA_j+\alpha C)X)\le0$ for every $X\in K$. Self-duality from step 1.3 therefore shows that $y=-w/\alpha\ge0$ has $\sum_jy_jA_j-C\succeq0$. Finally $(0,0)\in S$ gives $0\le\beta<w\cdot b+\alpha\gamma$, so $b\cdot y<\gamma$. Thus every $\gamma>p^*$ exceeds a dual feasible objective value. If $d^*>p^*$, choosing $\gamma=(p^*+d^*)/2$ contradicts the definition of $d^*$. Therefore $d^*\le p^*$; weak duality gives equality. Step 2.1 supplies primal attainment and the claimed interval. Under the additional optimal-dual promise, its witness $y^*$ has $b\cdot y^*=d^*=p^*$ and the promised norm bound. This proves all claims.

## Integration boundary

The smallest missing logical supplier is precisely the candidate above. Its proof already covers non-strict primal feasibility, complex Hermitian matrices, scalar inequality slacks, primal attainment, and the $[-R,R]$ search interval. There is no reason to strengthen the QA30 model to strict primal feasibility. No assertion of dual attainment should be inserted unless it remains an explicit assumption. The parent owns item identity, manifest/contract integration, and all direct and indirect consumers after the native writer drains.
