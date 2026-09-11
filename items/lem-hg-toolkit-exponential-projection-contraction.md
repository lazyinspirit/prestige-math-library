---
id: "lem-hg-toolkit-exponential-projection-contraction"
kind: "lemma"
title: "Exponential contraction of projection away from a quasiconvex set"
deps: ["def-hg-toolkit-local-geodesics-and-hausdorff-control", "lem-the-gromov-product-inequality-implies-the-four-point-condition", "thm-exponential-addition-formula", "thm-exponential-is-strictly-increasing", "def-natural-logarithm"]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: "Gouëzel–Shchur, corrected quantitative Morse lemma, Lemmas 2.4–2.5"
      url: "https://arxiv.org/pdf/1810.04579"
    - title: "Gouëzel, AFP Morse_Gromov_Theorem.thy, complete projection contraction proof"
      url: "https://www.isa-afp.org/browser_info/current/AFP/Gromov_Hyperbolicity/Morse_Gromov_Theorem.html"
status: "draft"
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

Let a geodesic space satisfy the product condition with constant $\kappa\ge0$, and let $\rho>\kappa$. A nonempty set $Y$ is **$K$-quasiconvex**, $K\ge0$, if every two points of $Y$ admit a geodesic contained in its closed $K$-neighbourhood. Suppose $q:[a,b]\to X$ is a $(\lambda,\varepsilon)$-quasi-geodesic, $a\le b$, and supplied points $p_a,p_b\in Y$ attain the distances of $q(a),q(b)$ to $Y$. If $d(q(t),Y)\ge D$ for all $t$ and $D\ge15\rho/2+K+\varepsilon/2$, then
$$ d(p_a,p_b)\le2K+8\rho+\max\left\{5\kappa,4\sqrt2\lambda(b-a)\exp\left(-\frac{(D-K-\varepsilon/2)\log2}{5\rho}\right)\right\}. $$
No closest-point existence for general $Y$ is assumed. Only the upper quasi-geodesic bound is used.

For a specified geodesic segment $Y=H$, the sharper estimate holds with the additive $2K+8\rho$ term omitted and with $K=0$ in the exponential and distance hypothesis. Closest points on such a segment exist. If $p$ is a closest point of $x$ on $H$ and $z\in H$, then $d(x,p)+d(p,z)\le d(x,z)+4\kappa$; points on $[p,x]$ retain $p$ as a closest point. These additional interfaces are proved below.

## Facts & Assumptions

**Given:** The space, constants, map, set and attained endpoint projections specified above.

[F1] The quasi-geodesic upper bound and infimum distance convention are those of [[def-hg-toolkit-local-geodesics-and-hausdorff-control]].

[F2] The product condition gives the four-point inequality with opposite-pair gap $2\kappa$ by [[lem-the-gromov-product-inequality-implies-the-four-point-condition]].

[F3] Exponentials obey the addition formula [[thm-exponential-addition-formula]], are increasing [[thm-exponential-is-strictly-increasing]], and $\exp(\log2)=2$ by [[def-natural-logarithm]].

## Proof

1.1 We first justify projections to any specified geodesic segment $H=\gamma([0,\ell])$. The function $f(t)=d(x,\gamma(t))$ is $1$-Lipschitz. Let $m=\inf f([0,\ell])$. Bisect the interval, keeping the left half if its infimum is $m$, and otherwise the right half, whose infimum must be $m$ since the original interval is their union. Iteration gives nested closed intervals of length $\ell/2^n$, each with infimum $m$. Their left endpoints have a supremum $r$ belonging to all the intervals, by completeness. Lipschitz control gives $0\le f(r)-m\le\ell/2^n$, hence $f(r)=m$. This includes $\ell=0$. Moreover, if $p$ is a closest point of $x$ in $H$ and $x'$ lies on $[p,x]$, then $p$ is still closest to $x'$: for $z\in H$, $d(x',z)\ge d(x,z)-d(x,x')\ge d(x,p)-d(x,x')=d(x',p)$. [F1, given, algebra]

1.2 For a closest point $p$ of $x$ on a segment $H$ and $z\in H$, put $t=(x|z)_p$ and choose $u\in[p,z]$ at radius $t$. Write $A=d(x,p)$ and $P=d(p,z)$; from the definition of $t$ we have $A+P=d(x,z)+2t$. Applying the product inequality at basepoint $x$ with bridge $u$ gives $(p|z)_x\ge\min\{(p|u)_x,(u|z)_x\}-\kappa$, and the products expand to $(p|z)_x=A-t$ and $(p|u)_x=(u|z)_x=(A+d(x,u)-t)/2$, since $d(p,u)=t$. Hence $d(x,u)\le d(x,p)-t+2\kappa$. Minimality of $p$ forces $t\le2\kappa$, or equivalently $d(x,p)+d(p,z)\le d(x,z)+4\kappa$. For projections $p,r$ of $x,y$ to the same segment, put $A=d(x,p)$, $B=d(y,r)$ and $s=d(p,r)$. The just-proved estimate gives $d(x,r)+d(y,p)\ge A+B+2s-8\kappa$. By the four-point inequality this sum is at most $\max\{A+B,d(x,y)+s\}+2\kappa$. If $s>5\kappa$, the first entry of the maximum cannot suffice, and consequently $s\le d(x,y)-A-B+10\kappa$. Thus always $s\le\max\{5\kappa,d(x,y)-A-B+10\kappa\}$. [F2, given, algebra]

2.1 Here is the halving estimate. Suppose projections $p,r$ of $x,y$ lie on a segment $H$, $d(x,y)\le10\rho+c$, $c\ge0$, and $A,B\ge M+5\rho+c/2$, with $M\ge15\rho/2$. Step 1.2 gives $s=d(p,r)\le5\kappa\le5\rho$. Let $x',y'$ be the radius-$M$ points on $[p,x],[r,y]$. Step 1.1 preserves their projections. At basepoint $p$, all three products $(x'|x)_p,(x|y)_p,(y|y')_p$ are at least $M$: the first is exactly $M$; the second follows from $d(p,y)\ge B$ and $A+B-d(x,y)\ge2M$; the third follows from $d(p,y')\ge M$, $d(p,y)\ge B$ and $d(y,y')=B-M$. Two product inequalities give $(x'|y')_p\ge M-2\rho$. The same argument at $r$ gives the analogous bound. Writing $v=d(x',y')$, we obtain $d(p,y')\ge M-4\rho+v$ and $d(r,x')\ge M-4\rho+v$. Four-point control now yields $2M-10\rho+2v\le\max\{s+v,2M\}$. Since $s\le5\rho\le2M-10\rho$, if the first entry is maximal this forces $v=0$; otherwise it gives $v\le5\rho$. In either case $d(x',y')\le5\rho$. [step 1.1, step 1.2, F2, algebra]

2.2 For the original $Y$, choose its quasiconvexity segment $H=[p_a,p_b]$, and choose closest points $r_a,r_b$ of $q(a),q(b)$ on $H$ using step 1.1. For any $h\in H$ and any $e>0$, there exists $y\in Y$ with $d(h,y)<K+e$. Consequently $D\le d(q(t),y)\le d(q(t),h)+K+e$. Letting $e$ tend to zero and taking the infimum over $h$ shows $d(q(t),H)\ge D-K$. At $h=r_a$, minimality of $p_a$ in $Y$ similarly gives $d(q(a),p_a)\le d(q(a),r_a)+K$. Step 1.2 on $H$, with $x=q(a),p=r_a,z=p_a$, then gives $d(r_a,p_a)\le K+4\kappa\le K+4\rho$. The same estimate holds at $b$. [step 1.1, step 1.2, F1, given, algebra]

3.1 By finite induction, a chain $z_0,\ldots,z_{2^j}$ with projections $r_i$ to $H$, adjacent gaps at most $10\rho+c$, and projection distances at least $5\rho j+15\rho/2+c/2$, satisfies $d(r_0,r_{2^j})\le5\kappa$. For $j=0$ this is step 1.2. For $j+1$, move each point along its projection segment to radius $M=5\rho j+15\rho/2$. Step 2.1 makes adjacent new gaps at most $5\rho$. Discard odd-indexed points: adjacent retained gaps are at most $10\rho$, their projections are unchanged by step 1.1, and all their distances to $H$ equal $M$. The induction hypothesis with $c=0$ applies to this chain of $2^j$ gaps and proves the claim. This is an induction over finite chains, not a selection over all path parameters. [step 1.1, step 1.2, step 2.1]

4.1 First consider a geodesic target $H$ with the whole image at distance at least $D_0\ge15\rho/2+\varepsilon/2$. Set $j=\lfloor(D_0-\varepsilon/2-15\rho/2)/(5\rho)\rfloor\ge0$ and $T=\lambda(b-a)$. If $T\le10\rho2^j$, sample $q$ at $2^j+1$ equally spaced parameters and project to $H$, retaining the supplied endpoint projections. Step 1.1 supplies the finitely many other projections. Each adjacent gap is at most $10\rho+\varepsilon$, and step 3.1 gives the bound $5\kappa$. Even when $a=b$, the two endpoint projections may be supplied differently; the finite chain argument still applies. [step 1.1, step 3.1, F1, algebra]

4.2 If $T>10\rho2^j$, take the least integer $N$ with $T\le10\rho2^N$. Then $N>j$ and $2^N< T/(5\rho)$, by minimality. Sample at $2^N+1$ equally spaced parameters, with finite projections as before. Each block of $2^j$ gaps satisfies step 3.1. Adding over the $2^{N-j}$ blocks gives $d(r_a,r_b)\le5\kappa2^{N-j}\le5\rho2^{N-j}\le T2^{-j}$. [step 1.1, step 3.1, F1, algebra]

5.1 The floor defining $j$ gives $j>(D_0-\varepsilon/2)/(5\rho)-5/2$. Using F3, $2^{-j}\le4\sqrt2\exp(-(D_0-\varepsilon/2)\log2/(5\rho))$. Here $\log2>0$ because $\exp$ is increasing and $\exp(0)=1$; addition gives $\exp(-j\log2)=2^{-j}$ and $\exp((5/2)\log2)=4\sqrt2$ (the latter is positive and its square is $32$). Thus steps 4.1–4.2 give the asserted maximum bound for a segment target, without the $2K+8\rho$ term. [step 4.1, step 4.2, F3, algebra]

6.1 Apply step 5.1 with $D_0=D-K$, whose required lower bound is exactly the stated hypothesis. The triangle inequality through $r_a,r_b$ adds at most $2K+8\rho$ by step 2.2, yielding the displayed result. The proof uses finite choices and uniquely specified bisections only; it never assumes projections of arbitrary points onto $Y$. The auxiliary positive $\rho$ also permits $\kappa=0$ without division by zero. [step 5.1, step 2.2, algebra] ∎
