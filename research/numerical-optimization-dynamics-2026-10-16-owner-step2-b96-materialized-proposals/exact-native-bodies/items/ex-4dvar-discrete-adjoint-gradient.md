## Example

Take the scalar discrete model $x_0(\theta)=\theta$, $x_1=2x_0$, and $x_2=3x_1$. Instantiate the strong-constraint objective of [[alg-four-dimensional-variational-assimilation]] with $T=2$, $d_0=d_1=d_2=p_1=p_2=1$, $U_0=U_1=U_2=\mathbb R$, model maps $\Psi_0(x)=2x$ and $\Psi_1(x)=3x$, and observation maps $G_1=G_2=\operatorname{id}_{\mathbb R}$. Choose $m_b=y_1=y_2=0$ and the scalar positive-definite covariance matrices $B=\Gamma_1=\Gamma_2=[1]$. The decision variable is the initial state $x_0=\theta$; there are no weak-constraint model-error penalties. The objective is exactly
$$J(\theta)=\tfrac12x_0^2+\tfrac12x_1^2+\tfrac12x_2^2.$$

## Facts & Assumptions

**Given:** The finite scalar state-step graph, identity observation maps, unit positive-definite covariances, strong-constraint objective, and exact-real arithmetic.

[F1] The reverse recursion for a finite $C^1$ state-step objective is its exact gradient ([[thm-discrete-adjoint-gradient-recursion]]).

[F2] The strong-constraint variational assimilation objective contains a background penalty and observation-misfit terms along the generated model trajectory ([[alg-four-dimensional-variational-assimilation]]). The stated linear maps are $C^1$ on their open domains and the selected scalar covariances are positive definite, so that objective is admissible.

## Verification

1.1 Direct substitution gives $x_1=2\theta$ and $x_2=6\theta$, so $J(\theta)=\frac12(1+4+36)\theta^2=\frac{41}{2}\theta^2$ and $J'(\theta)=41\theta$. [given, F2, algebra]

2.1 The terminal adjoint seed is $p_2=x_2=6\theta$. The reverse recursion [F1] gives $p_1=x_1+3p_2=20\theta$ and $p_0=x_0+2p_1=41\theta$. Since $Dx_0/D\theta=1$, the adjoint gradient is $p_0=41\theta$, agreeing with the direct derivative. [F1, step 1.1, algebra] ∎
