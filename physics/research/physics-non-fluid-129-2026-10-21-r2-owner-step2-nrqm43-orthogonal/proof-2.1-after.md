2.1 Put $\gamma_\ell f=(a,b):=(\Gamma_0f,\ell\Gamma_1f)$ and let
$\widehat M=\gamma_\ell(D(T))$. Equivalently,
$\widehat M=\{(a,b):(a,b/\ell)\in M\}$, where $M$ is the unscaled trace
image from step 1.1. Define
$\widehat B((a,b),(a',b'))=\langle b,a'\rangle-\langle a,b'\rangle$ and
$\widehat M^{\widehat\omega}:=\{z:\widehat B(m,z)=0\text{ for all }m\in
\widehat M\}$.
Since $\widehat B=\ell B$ after undoing the derivative scaling and
$\ell>0$, step 1.2 gives $\widehat M=\widehat M^{\widehat\omega}$ exactly
when $T$ is self-adjoint. The map $\gamma_\ell$ is onto because the trace map
in [F1] is onto and multiplying its derivative coordinates by $\ell>0$ is
invertible. For $x=a+ib$ and $y=a-ib$, direct expansion using
the first-variable-linear inner product gives
$$\widehat B((a,b),(a',b'))=\frac{\langle x,x'\rangle-\langle y,y'\rangle}{2i}.$$
Thus $\widehat M=\widehat M^{\widehat\omega}$ implies that
$(a,b)\mapsto(x,y)$ sends $\widehat M$ to the graph of an
inner-product-preserving linear map $R:X\to\mathbb C^2$, where
$X=\{a+ib:(a,b)\in\widehat M\}$. It is well defined: if a member of
$\widehat M$ has $x=0$, isotropy gives $\|y\|^2=\|x\|^2=0$, so $y=0$.
Maximality forces
$X=\mathbb C^2$. Indeed, define $X^\perp=\{z:\langle x,z\rangle=0\text{ for every }x\in X\}$ with $\langle x,z\rangle=x_1\overline{z_1}+x_2\overline{z_2}$. Every proper complex linear subspace $X$ has a nonzero vector in $X^\perp$, by the following coordinate argument. If $X=\{0\}$, take $x_0=(1,0)$. Otherwise take $0\ne v=(v_1,v_2)\in X$. Every $w\in X$ is a multiple of $v$: if $v_1w_2-v_2w_1\ne0$, the inverse of the two-column matrix $(v,w)$ expresses both standard coordinate vectors as linear combinations of $v,w$, implying $X=\mathbb C^2$; if this determinant is zero, solving in a nonzero coordinate of $v$ gives $w=cv$. Thus for proper $X$ one has $X=\operatorname{span}\{v\}$, and $x_0=(-\overline{v_2},\overline{v_1})\ne0$ satisfies $\langle cv,x_0\rangle=c(-v_1v_2+v_2v_1)=0$. No closed-subspace decomposition or additional choice principle is used. If $X$ were proper, take this $x_0$ and set
$a=x_0/2$, $b=x_0/(2i)$, so $(x,y)=(x_0,0)$. The displayed identity makes
this boundary pair orthogonal for $\widehat B$ to all of $\widehat M$, hence it
lies in $\widehat M^{\widehat\omega}=\widehat M$; then
$x_0\in X\cap X^\perp$, a contradiction. Therefore
$R$ is a linear isometry from $\mathbb C^2$ into $\mathbb C^2$. Let
$e_1,e_2$ be the standard basis and write $Re_1=(\alpha_1,\beta_1)$ and
$Re_2=(\alpha_2,\beta_2)$. Isometry gives
$$|\alpha_1|^2+|\beta_1|^2=|\alpha_2|^2+|\beta_2|^2=1,\qquad
\alpha_1\overline{\alpha_2}+\beta_1\overline{\beta_2}=0.$$
Direct expansion gives
$$|\alpha_1\beta_2-\alpha_2\beta_1|^2=(|\alpha_1|^2+|\beta_1|^2)(|\alpha_2|^2+|\beta_2|^2)-|\alpha_1\overline{\alpha_2}+\beta_1\overline{\beta_2}|^2=1.$$
Thus the matrix $U$ with columns $Re_1,Re_2$ is invertible, so these vectors
span $\mathbb C^2$ and $R$ is onto. Their orthonormality gives
$U^*U=I_2$; since $U$ is invertible, this implies $U^*=U^{-1}$ and hence
$UU^*=I_2$. Thus $U\in U(2)$, and its graph condition is
$U(a+ib)=a-ib$, equivalently
$(U-I_2)a+i(U+I_2)b=0$. This $U$ is unique because its value is fixed for
every $x\in\mathbb C^2$. [A1, F1, F2, step 1.1, step 1.2, algebra]