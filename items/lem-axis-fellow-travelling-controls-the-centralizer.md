---
id: "lem-axis-fellow-travelling-controls-the-centralizer"
kind: "lemma"
title: "Axis fellow travelling controls the centralizer"
deps: ["lem-infinite-order-elements-have-positive-stable-translation-length", "def-hg-toolkit-hyperbolic-group-and-stable-length", "lem-slim-triangles-imply-the-gromov-product-inequality", "def-hg-toolkit-slim-triangles-products-and-four-point-constants", "def-hg-toolkit-loxodromics-and-independent-poles", "lem-boundary-products-are-independent-of-representative-and-basepoint", "prop-word-metric-balls-are-finite-exactly-when-the-generating-set-is-finite"]
provenance:
  statement: "ai-altered"
  proof: "ai-generated"
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: "Hamann Theorem 5.2.6 pp.89–90, complete proof read"
      url: "https://www.math.uni-hamburg.de/home/hamann/Lehre/GeoGrTh/GeoGrThEn.pdf"
status: published
origin: "pipeline"
proof_strategy: "direct"
---


## Statement

Let $g$ have infinite order in the standing finitely generated $\delta$-slim hyperbolic group, with identity $o=e$. Suppose its power orbit has quasi-isometry constants $\lambda\ge1,c\ge0$. Then $C_G(g)/\langle g\rangle$ has finitely many cosets, and each coset meets a ball whose radius depends only on $\delta,\lambda,c$. Here $C_G(g)=\{h:hg=gh\}$.

The following stronger interfaces hold without AC. Put $\kappa=3\delta$ and let $J\ge4$ be any integer such that
$$2^J/\lambda-c>\lambda+c+4\kappa J.$$
There is $N\in\{1,2,\ldots,2^{J-1}\}$ which is a power of two such that, writing $x_i=g^{iN}$, $L=d(o,x_1)$ and $K=L-d(o,x_2)/2$, one has $K\ge0$, $L>2K+4\kappa$ and $L\le\lambda2^J+c$. Put $E=K+2\kappa+3\delta+1$. For every pair of integers $a<b$ and every specified geodesic $[x_a,x_b]$, each $x_i$, $a\le i\le b$, is within distance less than $E$ of that segment, and every point of the segment is within distance less than $L+3E$ of one of those $x_i$.

Moreover the subgroup $H$ preserving the unordered pole pair $\{g^+,g^-\}$ has $\langle g\rangle$ of finite index: each right coset $\langle g\rangle h$, $h\in H$, contains an element of length less than
$$R=L+4K+10\kappa+12\delta+5\le5(\lambda2^J+c)+10\kappa+12\delta+5.$$
Inversion gives the same assertion for left cosets. For use with other orbit points, in any geodesic $\delta$-slim space and any specified segment $[a,b]$, there is $z\in[a,b]$ with $d(v,z)<(a|b)_v+3\delta+1$.

## Facts & Assumptions

**Given:** The group, orbit constants and slimness hypothesis in the Statement.

[F1] Infinite-order power orbits are quasi-isometrically embedded by [[lem-infinite-order-elements-have-positive-stable-translation-length]]. The standing group conventions and word metric are those of [[def-hg-toolkit-hyperbolic-group-and-stable-length]].

[F2] The product inequality holds with $\kappa=3\delta$ by [[lem-slim-triangles-imply-the-gromov-product-inequality]]. Products and infimum-based slimness are defined in [[def-hg-toolkit-slim-triangles-products-and-four-point-constants]].

[F3] The two signed power sequences and their fixed positive-integer subsequences represent distinct poles, and bijective isometries act on boundary classes, by [[def-hg-toolkit-loxodromics-and-independent-poles]].

[F4] For each representing pair, its mixed joint liminf $P$ and supremal boundary product $B$ satisfy $P\le B\le P+2\kappa$ for distinct classes, by [[lem-boundary-products-are-independent-of-representative-and-basepoint]].

[F5] Word-metric balls are finite for a finite generating set by [[prop-word-metric-balls-are-finite-exactly-when-the-generating-set-is-finite]].

## Proof

1.1 Integers $J$ as stated exist. Indeed $2^J\ge J^2$ for integers $J\ge4$: equality holds at four, and $2J^2\ge(J+1)^2$ for $J\ge3$ propagates the inequality. A sufficiently large integer $J$ satisfies $J^2/\lambda>\lambda+2c+4\kappa J$, by choosing $J>8\lambda\kappa$ and $J^2>2\lambda(\lambda+2c)$. Set $a_n=d(o,g^n)$. If $a_{2^{j+1}}-a_{2^j}\le4\kappa$ for every $0\le j<J$, summing gives $a_{2^J}\le a_1+4\kappa J\le\lambda+c+4\kappa J$, contrary to the lower orbit bound. Thus some $N=2^j$ has $a_{2N}-a_N>4\kappa$. Subadditivity gives $K=a_N-a_{2N}/2\ge0$, and $L-2K=a_{2N}-a_N>4\kappa$. The upper orbit bound gives $L\le\lambda2^J+c$. [F1, given, algebra]

1.2 Here is the asserted point-to-segment bound for arbitrary $v,a,b$. Write $p=(a|b)_v$ and set $t=p+2\delta+2/3$. If $t>d(v,a)$, the endpoint $a$ has distance less than $p+3\delta+1$ from $v$. Otherwise choose the point $w\in[v,a]$ at distance $t$ from $v$, using any radial sides together with the specified $[a,b]$. Slimness supplies a witness within distance less than $\delta+1/3$ on $[v,b]\cup[a,b]$. If such a witness $u$ lies on $[v,b]$, put $s=d(v,u)$. Then $s>t-\delta-1/3$ and the route through $w,u$ gives $d(a,b)<d(v,a)-t+\delta+1/3+d(v,b)-s$. Thus $p>(t+s-\delta-1/3)/2>t-\delta-1/3>p$, an impossibility. A witness $z$ must therefore lie on $[a,b]$, with $d(v,z)<t+\delta+1/3=p+3\delta+1$. This includes repeated vertices and $\delta=0$. [F2, algebra]

2.1 Isometry gives consecutive distances $L$ and local turns $(x_{i-1}|x_{i+1})_{x_i}=K$. Write $A=K+\kappa$. For all $i<j$, the endpoint turn $(x_i|x_{j+1})_{x_j}\le A$. To prove this by induction on $j-i$, the first case is $K$. If the previous bound holds, the product identity gives $(x_i|x_{j-1})_{x_j}\ge L-A>A$. But F2 gives $K\ge\min\{(x_{j-1}|x_i)_{x_j},(x_i|x_{j+1})_{x_j}\}-\kappa$. Its first minimum entry exceeds $K+\kappa$, so the second is at most $A$, completing the induction. Reversal of any finite subchain proves the reversed endpoint bound as well. Expanding these bounds successively gives $d(x_i,x_j)\ge(j-i)(L-2A)$ for $i<j$. [step 1.1, F2, algebra]

3.1 For $i<m<j$, one has $(x_i|x_j)_{x_m}\le K+2\kappa$. If $j=m+1$, step 2.1 gives the stronger bound $A$. Otherwise its reversed version gives $(x_m|x_j)_{x_{m+1}}\le A$, whence $(x_{m+1}|x_j)_{x_m}\ge L-A>K+2\kappa$. Applying F2 with bridge $x_j$ to the product $(x_i|x_{m+1})_{x_m}\le A$ shows that the minimum of $(x_i|x_j)_{x_m}$ and $(x_j|x_{m+1})_{x_m}$ is at most $A+\kappa$. The second entry is larger, proving the claim. [step 2.1, step 1.1, F2, algebra]

4.1 Fix integers $a<b$ and the specified segment $\gamma:[0,D]\to X$ from $x_a$ to $x_b$, parametrized by length. Steps 3.1 and 1.2 give for each interior index $i$ a point $z_i=\gamma(t_i)$ with $d(x_i,z_i)<E$. Use $z_a=x_a$, $z_b=x_b$ and $t_a=0,t_b=D$ at the endpoints. Only finitely many witnesses are selected. Consecutive parameters satisfy $|t_{i+1}-t_i|=d(z_i,z_{i+1})<L+2E$. For $0<t<D$, take the first index $i$ with $t_i\ge t$. Then $i>a$, $t_{i-1}<t$, and $|t_i-t|<L+2E$. Consequently $d(\gamma(t),x_i)<L+3E$. The endpoints satisfy the same conclusion with distance zero. This proves both orbit-chord bounds; no monotonicity of the parameters was assumed. [step 3.1, step 1.2, step 2.1, algebra]

4.2 F3 identifies the sequences $(x_{-i})_{i\ge1}$ and $(x_j)_{j\ge1}$ as pole representatives. Step 3.1 bounds their mixed products at $o=x_0$ by $K+2\kappa$. Therefore F4 gives $B_o(g^-,g^+)\le K+4\kappa$. For every bijective isometry $h$, the exact finite-product identity $(hy|hz)_{ho}=(y|z)_o$ passes first to mixed liminfs and then to the supremum over representatives. This passage is exact because applying $h$ is a bijection between the representing sequences of the respective classes, by F3. Thus $B_{ho}(h\xi,h\eta)=B_o(\xi,\eta)$. If $h\in H$, symmetry gives $B_{ho}(g^-,g^+)=B_o(g^-,g^+)\le K+4\kappa$. F4 implies that the mixed liminf of our same two fixed orbit sequences at $ho$ is at most this number. Some $i,j\ge1$ consequently satisfy $(x_{-i}|x_j)_{ho}<K+4\kappa+1$; otherwise every tail infimum would be at least that larger threshold. [step 3.1, F3, F4, algebra]

5.1 Apply step 1.2 at $v=ho$ to any segment $[x_{-i},x_j]$. There is $z$ on it with $d(ho,z)<K+4\kappa+3\delta+2$. Step 4.1 supplies $m\in[-i,j]\cap\mathbb Z$ with $d(z,x_m)<L+3E$. Addition gives $d(ho,x_m)<R$. Since $o=e$, left invariance identifies this with $|g^{-mN}h|<R$. F3 shows that $g\in H$; composition and inverses of pole-pair preserving actions show directly that $H$ is a subgroup. Hence $g^{-mN}h\in\langle g\rangle h$ and belongs to $H$. F5 makes the set of these possible representatives finite, so there are finitely many right cosets. Inversion bijects right and left cosets and preserves word length. Finally $K\le L$ yields the displayed uniform upper bound for $R$. [step 1.2, step 4.1, step 4.2, F1, F3, F5, algebra]

6.1 If $h$ commutes with $g$, then $hg^{\pm n}=g^{\pm n}h$ and $d(hg^{\pm n},g^{\pm n})=|h|$. Bounded perturbation of sequence terms preserves boundary classes by the product formula, so $h$ fixes each pole and belongs to $H$. Thus step 5.1 supplies a representative $g^{-mN}h$ in the same centralizer coset, with the same radius bound. The subgroup $\langle g\rangle$ is central in $C_G(g)$, so either coset convention gives the stated quotient. All selections were finite for each specified element or segment; no family of geodesics, nearest-point attainment, properness theorem or AC is used. The inequalities remain strict and valid at $\delta=0$, $c=0$ and $N=1$. [step 5.1, F1, F3, F2, algebra] ∎
